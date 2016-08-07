angular.module('app', []); 

angular.module('app').controller('Github', function($scope, GithubFactory) {
           
  $scope.search = function(){
   
    GithubFactory.search($scope.repoName).then(function(data){
      
      $scope.results = data.items;
      
    });
    
  };
  
  
});

angular.module('app').factory('GithubFactory', function($http, $q){
  
  var GithubFactory = {};
  
  GithubFactory.search = function(repoName){
    
    var deferred = $q.defer();
                $http.get('https://api.github.com/search/repositories?q='+repoName+'&sort=stars&order=desc')
                    .then(function(response) {
                        deferred.resolve(response.data);
                    });
                return deferred.promise;
    
  };
  
  return GithubFactory;
  
  
});


