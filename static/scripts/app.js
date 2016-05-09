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
    'ngTouch',
    "ui.bootstrap",
    'ngFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      /*.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })*/
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
      .when('/time-media', {
        templateUrl: 'views/time-media.html',
        controller: 'TimeMediaCtrl',
        controllerAs: 'timeMedia'
      })
      .when('/time-countries', {
        templateUrl: 'views/time-countries.html',
        controller: 'TimeCountriesCtrl'
      })
      .when('/media-countries', {
        templateUrl: 'views/media-countries.html',
        controller: 'MediaCountriesCtrl'
      })
      .when('/media-time', {
        templateUrl: 'views/media-time.html',
        controller: 'MediaTimeCtrl'
      })
      .when('/countries-media', {
        templateUrl: 'views/countries-media.html',
        controller: 'CountriesMediaCtrl'
      })
      .when('/countries-time', {
        templateUrl: 'views/countries-time.html',
        controller: 'CountriesTimeCtrl'
      })
      .when('/network', {
        templateUrl: 'views/network.html',
        controller: 'NetworkCtrl'
      })
      .otherwise({
        redirectTo: '/time'
      });
  })
  .run(function(fileService,dataservice, $rootScope) {

    fileService.getFile('data/FlowMetadata.csv').then(function(d){

      var dsv = d3.dsv(";", "text/plain");
      dataservice.setMetaData(dsv.parse(d));
      $rootScope.gotmeta = true;

    })

  });
