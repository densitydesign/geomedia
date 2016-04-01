'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:stream.js
 * @description
 * # stream.js
 */
angular.module('geomediaApp')
  .directive('stream', function ($rootScope) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        var chart = d3.select(element[0]);
        var chartWidth = parseInt(chart.style("width").replace("px",""));

        var stream = geomedia.stream()
          .chartWidth(chartWidth)
        

        $rootScope.$watch("[startDate,endDate]",function(newValue,oldValue){
          if (newValue && newValue != oldValue) {
            $(element[0]).empty();
          scope.updateGraph();
          }
        },true)

        $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
          if (newValue && newValue != oldValue) {
            $(element[0]).empty();
            scope.updateGraph();
          }
        },true)

        $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
          if (newValue && newValue != oldValue) {
            $(element[0]).empty();
            scope.updateGraph();
          }
        },true)


        $rootScope.$watch('bytime',function(newValue,oldValue){
          if (newValue && newValue != oldValue) {
            $(element[0]).empty();
            scope.updateGraph();
          }
        })




        scope.updateGraph = function() {

          var nest = d3.nest()
            .key(function(d) { return d.time; })
            .key(function(d) { return d.TAG_event; })
            .rollup(function(leaves) { return leaves.length; })
            .entries($rootScope.bytime.bottom(Infinity))


          chart.datum(nest).call(stream)
        }

      }
    };
  });
