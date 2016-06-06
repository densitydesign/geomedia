'use strict';

/**
 * @ngdoc filter
 * @name geomediaApp.filter:prettyurl
 * @function
 * @description
 * # prettyurl
 * Filter in the geomediaApp.
 */
angular.module('geomediaApp')
  .filter('prettyurl', function () {
    return function (input) {
      if (input.slice(-1) == "/") input = input.substr(0,input.length-1);
      return input.replace("http://","")
    };
  });
