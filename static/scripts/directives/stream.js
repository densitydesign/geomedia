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

          scope.$on("time_update", function() {
              scope.updateGraph();
          })

        scope.updateGraph = function() {

            $(element[0]).empty();
          chart.datum(scope.data).call(stream)
        }

      }
    };
  });
