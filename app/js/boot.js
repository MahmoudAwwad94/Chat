'use strict';

(function(document) {
  requirejs.config({
    baseUrl: 'app/js',
    waitSeconds: 200,
    packages: [{
      name: 'bower_components',
      location: '../../bower_components'
    }],
    paths: {
      'jquery': '../../bower_components/jquery/dist/jquery.min',
      'angular': '../../bower_components/angular/angular.min',
      'uiRouter': '../../bower_components/angular-ui-router/release/angular-ui-router.min',
      'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min',
      'lodash': '../../bower_components/lodash/dist/lodash.min',
      'underscore': '../../bower_components/underscore/underscore-min',
      'restangular': '../../bower_components/restangular/dist/restangular.min',
      // 'constants': 'constants'
    },

    shim: {
      'angular': {
        exports: 'angular'
      },
      'bootstrap': {
        deps: ['jquery']
      },
      'uiRouter': {
        deps: ['angular']
      },
      'restangular': {
        deps: ['angular', 'underscore']
      },
      'app': {
        deps: ['uiRouter', 'bootstrap', 'lodash', 'underscore', 'restangular']
      }
    },
    priority: ['app']

  });
  requirejs([

    'angular',
    'app',
    'jquery'
  ], function(angular, app) {
    angular.bootstrap(document, [app.name]);
  });
}(window.document));
