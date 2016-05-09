'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:streamaxes
 * @description
 * # streamaxes
 */
angular.module('geomediaApp')
  .directive('streamaxes', function ($timeout,$rootScope) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

          var x, xAxis,xAxis2, svg, x1,x2, chartWidth, chartHeight;
          var margin= {right:28, left:28};
          var chart = d3.select(element[0]);

          x = d3.time.scale();

          // X-axis.
          xAxis = d3.svg.axis()
              .scale(x)
              .orient("top")
              .tickFormat(d3.time.format("%b %y"));

          xAxis2 = d3.svg.axis()
              .scale(x)
              .orient("top")
              .innerTickSize(-10)
              .outerTickSize(0)
              .ticks(d3.time.month, 1)
              .tickFormat("")



          $rootScope.$watch("[startDate,endDate]",function(newValue){
              if(newValue[0] && newValue[1] && x1) {

                  x.domain([$rootScope.startDate, $rootScope.endDate])
                  x1.call(xAxis);
                  x2.call(xAxis2);
              }

          },true)




          scope.$watch(function(){return element[0].offsetWidth}, function (newValue, oldValue) {
              if(newValue && newValue != oldValue) {

                  $(element).empty();

                 chartWidth = newValue//element[0].clientWidth;
                 chartHeight = scope.streamheight * 10 + 60;

                  x.range([margin.left, chartWidth - margin.right]);
                  xAxis.innerTickSize(-chartHeight)
                      .outerTickSize(0)

                  svg = chart.append("svg")
                      .attr("width", chartWidth)
                      .attr("height", chartHeight);


                  x1 = svg.append("g")
                      .attr('class', 'x axis xlines')
                      .attr("transform", "translate(0,40)")


                  x2 = svg.append("g").attr('class', 'x axis')
                      .attr("transform", "translate(0,40)");

                  x.domain([$rootScope.startDate, $rootScope.endDate])
                  x1.call(xAxis);
                  x2.call(xAxis2);
              }
          }, true);

      }
    };
  });
