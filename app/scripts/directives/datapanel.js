'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:datapanel
 * @description
 * # datapanel
 */
angular.module('geomediaApp')
  .directive('datapanel', function (dataservice, $rootScope) {
    return {
      templateUrl: 'views/datapanel.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

        scope.data = dataservice.getData()
        scope.meta = dataservice.getMetaData()
        scope.format = d3.time.format("%d/%m/%Y")


        scope.aggregateData = function(d) {

          scope.aggrByTime = d3.nest()
            .key(function(d) { return d.time })
            .entries(d);
        }

        scope.aggregateData(scope.data);



        $rootScope.$watch('gotdata',function(newValue, oldValue){
          if(newValue && newValue !== oldValue) {

            scope.data = dataservice.getData()
            scope.aggregateData(scope.data);

          }
        })



      }
    };
  });
