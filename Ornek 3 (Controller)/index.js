var module = angular.module('myApp', [])

module.controller('myController', [ '$scope', function ($scope) {
  $scope.name = 'Sami Özer'
  $scope.greet = function () {
    return 'Hello, ' + $scope.name + '!';
  }
}])
