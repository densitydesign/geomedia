'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:topbar
 * @description
 * # topbar
 */
angular.module('geomediaApp')
  .directive('topbar', function ($location, dataservice, $rootScope) {
    return {
      templateUrl: 'views/topbar.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

        scope.go = function(there) {
          $location.path(there);
        }

        $rootScope.$watch("gotdata", function(newVal, oldVal){
          if(newVal) {
            scope.data = dataservice.getData()
            scope.num = scope.data.length;
          }
        })


        $rootScope.$watch("gotmeta", function(newVal, oldVal){
          if(newVal) {
            scope.meta = dataservice.getMetaData()
          }
        })
      }
    };
  });


