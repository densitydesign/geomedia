'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:topbar
 * @description
 * # topbar
 */
angular.module('geomediaApp')
  .directive('topbar', function ($location) {
    return {
      templateUrl: 'views/topbar.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

        scope.go = function(there) {
          $location.path(there);
        }
      }
    };
  });
