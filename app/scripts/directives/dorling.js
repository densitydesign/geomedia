'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:dorling
 * @description
 * # dorling
 */
angular.module('geomediaApp')
    .directive('dorling', function ($rootScope, dorlingservice) {
        return {
            template: '<div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {

                var init_data = dorlingservice.getData();

                var chart = d3.select(element[0]);
                var chartWidth = parseInt(chart.style("width").replace("px", ""));
                var chartHeight = parseInt(chart.style("height").replace("px", ""));

                var padding = 3;

                var projection = d3.geo.mercator()
                    .scale((chartWidth + 1) / 2 / Math.PI)
                    .translate([chartWidth / 2, chartHeight / 2 + 50]);
//             .scale((width + 1) / 2 / Math.PI)
// .translate([width / 2, height / 2])

                var svg = chart.append("svg")
                    .attr("width", chartWidth)
                    .attr("height", chartHeight)

           /*     var path = d3.geo.path()
                    .projection(projection);


*/


                var colorScale = d3.scale.linear().range(["#CAD9E3","#427A99"]);

                var force = d3.layout.force()
                    .charge(0)
                    .gravity(0)
                    .friction(0.5)
                    .size([chartWidth, chartHeight]);

                scope.drawDorling = function () {
                    var max = d3.max(scope.data, function (d) {
                        return d.none + d[$rootScope.keyword]
                    });

                    var colMax = d3.max(scope.data, function (d) {
                        return d[$rootScope.keyword] / (d.none + d[$rootScope.keyword]);
                    });

                    colorScale.domain([0,colMax]);

                    var radius = d3.scale.sqrt()
                        .domain([0, max])
                        .range([0, 30]);



                    scope.data.forEach(function (d) {



                        d.r = radius(d.none + d[$rootScope.keyword]);

                    });


                    force
                        .nodes(scope.data)
                        .on("tick", tick)
                        .start();

                    var node = svg.selectAll("circle")
                        .data(scope.data, function (d) {
                            return d.key
                        });

                    node.enter().append("circle")
                        .attr("class", "g-comp")
                        .style("fill","white")
                        .attr("cx", function (d) {
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            return d.y;
                        });

                    node
                        .transition()
                        .duration(500)
                        .style("fill", function(d){return colorScale(d[$rootScope.keyword] / (d.none + d[$rootScope.keyword]))})
                        .attr("r", function (d) {
                            return d.r;
                        });
                }

                function tick(e) {
                    d3.selectAll("circle").each(gravity(e.alpha * .1))
                        .each(collide(.5))

                    d3.selectAll("circle")
                        .attr("cx", function (d) {
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            return d.y;
                        });
                }


                function gravity(k) {
                    return function (d) {
                        d.x += (d.x0 - d.x) * k;
                        d.y += (d.y0 - d.y) * k;
                    };
                }

                function collide(k) {
                    var q = d3.geom.quadtree(force.nodes());
                    return function (node) {
                        var nr = node.r + padding,
                            nx1 = node.x - nr,
                            nx2 = node.x + nr,
                            ny1 = node.y - nr,
                            ny2 = node.y + nr;
                        q.visit(function (quad, x1, y1, x2, y2) {
                            if (quad.point && (quad.point !== node)) {
                                var x = node.x - quad.point.x,
                                    y = node.y - quad.point.y,
                                    l = x * x + y * y,
                                    r = nr + quad.point.r;
                                if (l < r * r) {
                                    l = ((l = Math.sqrt(l)) - r) / l * k;
                                    node.x -= x *= l;
                                    node.y -= y *= l;
                                    quad.point.x += x;
                                    quad.point.y += y;
                                }
                            }
                            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
                        });
                    };
                }

                scope.$on("countries_update", function() {
                    scope.drawDorling();
                })


            }
        };
    });
