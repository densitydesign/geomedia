'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:dorlingSingle
 * @description
 * # dorlingSingle
 */
angular.module('geomediaApp')
  .directive('mapsingle', function ($rootScope, dorlingservice) {
    return {
      template: '<div></div>',
        scope:{
            'mapheight':"@",
            'mapdata':'&',
            'mapindex':"@"
        },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return "<h5>"+ d.label+"</h5><p>geo-tagged articles <b class='blu'>"+d.articles+"</b></p><p>articles on "+$rootScope.keyword+" <b class='blu'>"+Math.round((d.articles*d.ratio))+"</b></p><p>% of articles on "+$rootScope.keyword+" <b class='blu'>"+(d.ratio*100).toFixed(2)+"%</b></p>" });

        var chart = d3.select(element[0]);
          var padding = 0;

          var svg = chart.append("svg")

          var colorScale = d3.scale.log().range(["#CAD9E3","#427A99"]).clamp(true).nice();

          var force = d3.layout.force()
              .charge(0)
              .gravity(0)
              .friction(0.5)

          scope.drawMap = function() {

              scope.data = _.cloneDeep(scope.mapdata({k: scope.mapindex}))

              var chartWidth = parseInt(chart.style("width").replace("px", ""));
              var chartHeight = scope.mapheight;


              var projection = d3.geo.mercator()
                  .scale((chartWidth + 1) / 2 / Math.PI)
                  .translate([chartWidth / 2 - chartWidth*0.07, (chartHeight / 2) + chartHeight *.07 ]);

              svg .attr("width", chartWidth)
                  .attr("height", chartHeight)

              svg.call(tip)

              force.size([chartWidth, chartHeight]);


              var max = d3.max(scope.data, function (d) {
                  return d.none + d[$rootScope.keyword]
              });

              var colMax = d3.max(scope.data, function (d) {
                  return d[$rootScope.keyword] / (d.none + d[$rootScope.keyword]);
              });

              colorScale.domain([0.001,colMax]);

              var radius = d3.scale.sqrt()
                  .domain([0, max])
                  .range([1, scope.mapheight/20]);

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
                      d.articles =  found.none + found[$rootScope.keyword];
                      d.color = colorScale(found[$rootScope.keyword] / (found.none + found[$rootScope.keyword]));
                      d.ratio = found[$rootScope.keyword] / (found.none + found[$rootScope.keyword]);
                  }
                  else {
                      d.articles = 0;
                      d.ratio = 0;
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
                  .attr("r",0)
                  .on('mouseover', tip.show)
                  .on('mouseout', tip.hide);

              node
                  .transition()
                  .duration(500)
                  .style("fill", function(d){return 'color' in d ? d.color : colorScale(0)})
                  .attr("r", function (d) {
                      return 'r' in d ? d.r : radius(0);
                  });

            var texts = svg.selectAll("text.lbl")
              .data(init_data, function (d) {
                return d.key
              });

            texts.enter().append("text")
              .attr("class", "lbl")
              .style("fill","#333")
              .style("font-family","Source Serif")
              .attr("x", function (d) {
                return d.x;
              })
              .attr("y", function (d) {
                return d.y;
              })
              .attr("dy", function (d) {
                return d.r/10;
              })
              .style("font-size",9)
              .attr("text-anchor","middle")
              .text(function(d){
                return d.key
              })
              .on('mouseover', tip.show)
              .on('mouseout', tip.hide)


            texts
              .transition()
              .duration(500)
              .style("fill", function(d){return d.r > 10 ? '#333' : 'none'})
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

            chart.selectAll(".lbl")
              .attr("x", function (d) {
                return d.x;
              })
              .attr("y", function (d) {
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


          scope.$on("countries_media_refresh",function(){
              scope.drawMap();
          })



          scope.$watch("mapindex",function(newValue, oldValue){
              if(newValue != oldValue) {
                  scope.drawMap();
              }
          })



      }
    };
  });
