define('app', function(app) {
  app.controller('testController', ['$rootScope', "$scope", function($rootScope, $scope) {
    console.log("123");
  }]);
});
