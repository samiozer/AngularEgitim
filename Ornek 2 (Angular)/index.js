angular.module('ornek2', [])
  .controller('ornek2Controller',[ '$scope',function ($scope) {
    $scope.name = '';
    $scope.submit = function () {
      alert('Buradan "' + $scope.name + '" ismi servise gönderildi.')
    }
  }]);
