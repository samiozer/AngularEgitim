;(function (angular) {
  'use strict'

  // Provide the wiring information in a module
  var app = angular.module('myApp', [])

  app.filter('reverse', [function () {
    return function (input, uppercase) {
      var i, out = ''
      input = input || ''
      for (i = 0; i < input.length; i++) {
        out = input.charAt(i) + out
      }
      // conditional based on optional argument
      if (uppercase) {
        out = out.toUpperCase()
      }
      return out
    }
  }])

  app.controller('myController', ['$scope', '$filter', function ($scope, $filter) {}])
})(window.angular)
