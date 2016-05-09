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

          scope.locStartsWith = function(x) {
              //console.log($location.path(), x)
              return $location.path().indexOf("/"+x)==0;
          }

          scope.locEqualTo = function(x) {
              return $location.path()== "/"+x;
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


