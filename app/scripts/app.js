'use strict';

/**
 * @ngdoc overview
 * @name geomediaApp
 * @description
 * # geomediaApp
 *
 * Main module of the application.
 */
angular
  .module('geomediaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/time', {
        templateUrl: 'views/time.html',
        controller: 'TimeCtrl',
        controllerAs: 'time'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl',
        controllerAs: 'media'
      })
      .when('/countries', {
        templateUrl: 'views/countries.html',
        controller: 'CountriesCtrl',
        controllerAs: 'countries'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
