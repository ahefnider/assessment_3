var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/superheroes', {
      templateUrl: '/views/superheroes.html',
      controller: "HeroController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
