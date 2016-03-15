'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:topbar
 * @description
 * # topbar
 */
angular.module('geomediaApp')
  .directive('topbar', function ($location, dataservice) {
    return {
      templateUrl: 'views/topbar.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

        scope.go = function(there) {
          $location.path(there);
        }

        scope.data = dataservice.getData()
        scope.meta = dataservice.getMetaData()


        scope.$on("newdata", function(){
          scope.data = dataservice.getData()
        })



      }
    };
  });
