'use strict';

/**
 * @ngdoc filter
 * @name geomediaApp.filter:medias
 * @function
 * @description
 * # medias
 * Filter in the geomediaApp.
 */
angular.module('geomediaApp')
  .filter('medias', function (medias) {

    var allmedias = medias.getmedias();

    return function (input) {
      return allmedias[input].media_name;
    };
  });
