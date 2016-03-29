'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:network
 * @description
 * # network
 */
angular.module('geomediaApp')
  .directive('network', function ($rootScope) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        var chart = d3.select(element[0]);
        var chartWidth = parseInt(chart.style("width").replace("px", ""));
/*
        var stream = geomedia.stream()
          .chartWidth(chartWidth)
*/

        $rootScope.$watch("byid", function (newValue, oldValue) {
          if (newValue) {

            function reduceAdd(p, v) {
              p.push(v.TAG_geo);
              return p;
            }

            function reduceRemove(p, v) {
              var i = p.indexOf(v.TAG_geo);
              if(i != -1) {
                return p.splice(i, 1);
              }
              return p
            }

            function reduceInitial() {
              return [];
            }

            var links = []

            var countriesCount = newValue.group().reduce(reduceAdd, reduceRemove, reduceInitial).all();
            countriesCount.forEach(function(e){
              
            })


          //  chart.datum(nest).call(stream)

          }
        })
      }

    };
  });
