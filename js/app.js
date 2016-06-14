'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute','angular-carousel', 'angular-nicescroll']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "indexCtrl",
            templateUrl: "templates/index.html"
        })
        .when('/case', {
            controller: "caseCtrl",
            templateUrl: "templates/case.html"
        });
    $routeProvider.otherwise({redirectTo: '/'});
}]);
