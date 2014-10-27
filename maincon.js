var route = angular.module('route', ['ngRoute','grabController']);
route.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'index.html',
        controller: 'grabController'
      }).
      when('/about', {
        templateUrl: 'about.html',
        controller: 'grabController'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);