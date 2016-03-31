'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:brushablebars
 * @description
 * # brushablebars
 */
angular.module('geomediaApp')
  .directive('brushablebars', function ($location, $rootScope) {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var chart = d3.select(element[0]);
        var chartWidth = parseInt(chart.style("width").replace("px",""));



        scope.$watch("aggrByTime",function(newVal, oldVal){
          if(newVal) {

            var startDate = scope.aggrByTime[0].key
            var endDate = scope.aggrByTime[ scope.aggrByTime.length - 1 ].key

            var timeline = geomedia.timeline()
              .chartWidth(chartWidth)
              .extent([startDate, endDate])

              .on("brushed", function(d){
                startDate = d[0];
                endDate = d[1];

               // $location.search('startDate', scope.format(startDate));
               // $location.search('endDate', scope.format(endDate));
                $rootScope.$broadcast("dateChange",d);
                if(!scope.$$phase) {
                  scope.$apply()
                }
              })

            chart.datum(scope.aggrByTime).call(timeline)

          }
        })



      }
    };
  });
