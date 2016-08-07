'use strict'

var app = angular.module('myApp', ['ngRoute']);
app.config(routerConfig);

routerConfig.$inject =['$routeProvider','$locationProvider'];

app.controller('homeController',function(){

});

app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});
