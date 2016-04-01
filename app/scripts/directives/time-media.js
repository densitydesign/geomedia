'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:timeMedia
 * @description
 * # timeMedia
 */
angular.module('geomediaApp')
  .directive('timeMedia', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the timeMedia directive');
      }
    };
  });
