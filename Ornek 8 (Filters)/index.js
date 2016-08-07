;(function (angular) {
  'use strict'

  // Provide the wiring information in a module
  var app = angular.module('myApp', [])



  app.controller('myController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.name = 'John Smith'

    $scope.uppercaseName = function () {
      return $filter('uppercase')($scope.name)
    }
  }])
})(window.angular)
