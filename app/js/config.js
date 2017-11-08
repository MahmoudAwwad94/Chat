chat.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider', function($stateProvider, $urlRouterProvider, RestangularProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller: "chatMain",
      templateUrl: 'app/view/home.html'
    })
    .state('test', {
      url: '/test',
      controller: "test",
      templateUrl: 'app/view/test.html'
    })

  $urlRouterProvider.otherwise('/');

}]);
