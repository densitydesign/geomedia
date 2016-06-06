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

          var startDate, endDate;


          var timeline = geomedia.timeline()
              .chartWidth(chartWidth)
              .on("brushed", function(d) {
                  startDate = d[0];
                  endDate = d[1];
               
                  $rootScope.$broadcast("dateChange",d);
                  if(!scope.$$phase) {
                      scope.$apply()
                  }
              })

        scope.$watch("aggrByTime",function(newVal, oldVal){
          if(newVal) {



           startDate = scope.aggrByTime[0].key;
           endDate = scope.aggrByTime[ scope.aggrByTime.length - 1 ].key;

           timeline.extent([startDate, endDate]);
            console.log(scope.aggrByTime);

           chart.datum(scope.aggrByTime).call(timeline)
          }
        })

          $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
              if(newValue!=oldValue) {
                console.log(scope.aggrByTime);
                  chart.datum(scope.aggrByTime).call(timeline)
              }
          },true)

          $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
              if(newValue!=oldValue) {
                console.log(scope.aggrByTime);
                  chart.datum(scope.aggrByTime).call(timeline)
              }
          },true)



      }
    };
  });
