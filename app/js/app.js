define(['angular', 'routes'], function(angular, routes) {
  var app = angular.module('chat', ['ui.router', 'restangular']);
  app.config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$stateProvider', '$urlRouterProvider', '$locationProvider', 'RestangularProvider', function($controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider) {
    console.log("urlRouterProvider", $urlRouterProvider);
    console.log("stateProvider", $stateProvider);
    console.log("angular", angular);
    console.log("routes", routes);

    app.contoller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $compileProvider.service;

    // RestangularProvider.setBaseUrl('localhost:5102');
  }]).run(["$rootScope", function($rootScope) {
    console.log("app test");
    console.log("rootScope", $rootScope);
  }]);
  return app;
})
