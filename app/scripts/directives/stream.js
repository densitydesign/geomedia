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
          .keyword($rootScope.keyword)

          scope.$on("time_update", function() {
              scope.updateGraph();
          })

        $rootScope.$watch("keyword",function(n,o){
          if(n!=o && n) {
          stream.keyword($rootScope.keyword)
          }
        })

        scope.updateGraph = function() {

            $(element[0]).empty();
          chart.datum(scope.data).call(stream)
        }

      }
    };
  });
