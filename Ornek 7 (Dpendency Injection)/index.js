


;(function (angular) {
  'use strict'

  // Provide the wiring information in a module
  var app = angular.module('myApp', [])

  // inject $window
  app.factory('greeter', function ($window) {
    return {
      greet: function (text) {
        $window.alert(text)
      }
    }
  })

  app.controller('myController', ['$scope', 'greeter',
    function ($scope, greeter) {
      $scope.sayHello = function () {
        greeter.greet('Hello World')
      }
    }])
})(window.angular)
