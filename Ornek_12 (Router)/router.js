

function routerConfig($routeProvider,$locationProvider){
 $routeProvider
    .when("/", {
        templateUrl : "home.html"
    })
    
    .when("/london", {
        templateUrl : "london.html",
        controller : "londonCtrl"
    })
    .when("/paris", {
        templateUrl : "paris.html",
        controller : "parisCtrl"
    }) ;
}
