angular.module('app', []); 

angular.module('app').controller('CalcController', function($scope, CalcService) {
            $scope.square = function() {
               $scope.result = CalcService.square($scope.number);
            };
         });


angular.module('app').service('CalcService', function(){
            this.square = function(a) {
               return a * a;
            };
         });