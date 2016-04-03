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


                var chart = d3.select(element[0]);
                var chartWidth = parseInt(chart.style("width").replace("px", ""));
                var chartHeight = parseInt(chart.style("height").replace("px", ""));

                var padding = 3;

                var projection = d3.geo.mercator()
                    .scale((chartWidth + 1) / 2 / Math.PI)
                    .translate([chartWidth / 2 - chartWidth*0.07, (chartHeight / 2) + chartHeight *.07 ]);

                var svg = chart.append("svg")
                    .attr("width", chartWidth)
                    .attr("height", chartHeight)


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
                        .range([1, 30]);

                    var init_data = _.cloneDeep(dorlingservice.getData());

                    init_data.forEach(function (d) {

                        var crds = projection([d.lon, d.lat]);
                        d.x = crds[0],
                            d.x0 = crds[0]
                        d.y = crds[1]
                        d.y0 = crds[1]


                        var found = _.find(scope.data, function(e){ return d.key == e.key})
                        if(found) {
                            d.r = radius(found.none + found[$rootScope.keyword]);
                            d.color = colorScale(found[$rootScope.keyword] / (found.none + found[$rootScope.keyword]));
                        }
                    });


                    force
                        .nodes(init_data)
                        .on("tick", tick)
                        .start();

                    var node = svg.selectAll("circle")
                        .data(init_data, function (d) {
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
                        })
                    .attr("r",0);

                    node
                        .transition()
                        .duration(500)
                        .style("fill", function(d){return 'color' in d ? d.color : colorScale(0)})
                        .attr("r", function (d) {
                            return 'r' in d ? d.r : radius(0);
                        });
                }

                function tick(e) {
                    chart.selectAll("circle").each(gravity(e.alpha * .1))
                        .each(collide(.5))

                    chart.selectAll("circle")
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
