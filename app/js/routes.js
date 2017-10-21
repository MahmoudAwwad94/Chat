'use strict';
define([''], function() {
  return {
    routes: {

      'home.main': {
        url: '/',
        dependencies: ['controllers/home'],
        views: {
          'main': {
            controller: 'homeController',
            templateUrl: 'app/views/home.html'
          }
        }
      },

      'test': {
        url: '/test',
        dependencies: ['controllers/test'],
        views: {
          'main': {
            controller: 'testController',
            templateUrl: 'app/views/test.html'
          }
        }
      }
    },
    otherwise: '/',
  };
});
