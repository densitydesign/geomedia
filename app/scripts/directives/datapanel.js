'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:datapanel
 * @description
 * # datapanel
 */
angular.module('geomediaApp')
  .directive('datapanel', function () {
    return {
      templateUrl: 'views/datapanel.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

      }
    };
  });
