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
      template: '<div id="graph-container"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        console.log("instance!")

        var chart = d3.select(element[0]);
        var chartWidth = parseInt(chart.style("width").replace("px", ""));

        var s = "";

        var  g = {
          nodes: [],
          edges: []
        };


        function reduceAdd(p, v) {
          p.countries.push(v.TAG_geo);
          if(v.TAG_event != "") p.tag = v.TAG_event
          return p;
        }

        function reduceRemove(p, v) {
          var i = p.countries.indexOf(v.TAG_geo);
          if(i != -1) {
            return p.countries.splice(i, 1);
          }
          return p
        }

        function reduceInitial() {
          return {countries:[],tag:"empty"};
        }

        $rootScope.$watch("[startDate,nedDate]",function(newValue,oldValue){
          if (newValue && newValue != oldValue) {


            if(sigma.layouts.isForceLinkRunning()) {
              sigma.layouts.stopForceLink();
            }

            var nodes = {}
            var links = {}

            var maxNode = 0;
            var maxLink = 0;

            var countriesCount = $rootScope.byid.group().reduce(reduceAdd, reduceRemove, reduceInitial).all();
            countriesCount.forEach(function(e){

              if(e.value.countries.length && e.value.countries[0]!="") {

                if (e.value.countries.length >= 2) {

                  for (var i = e.value.countries.length - 1; i >= 1; i--) {

                    var ctrs = [e.value.countries[i], e.value.countries[i - 1]].sort();

                    if (e.value.countries[i] in nodes) {
                      nodes[e.value.countries[i]].size++;
                      e.value.tag in nodes[e.value.countries[i]] ? nodes[e.value.countries[i]][e.value.tag]++ : nodes[e.value.countries[i]][e.value.tag]=1;
                      if (nodes[e.value.countries[i]].size > maxNode) maxNode = nodes[e.value.countries[i]].size;
                    }

                    else {
                      nodes[e.value.countries[i]] = {
                        id: e.value.countries[i],
                        x: Math.random(),
                        y: Math.random(),
                        label: e.value.countries[i],
                        size: 1,
                      }
                      nodes[e.value.countries[i]][e.value.tag] = 1;
                    }


                    if (ctrs.join("-") in links) {
                      links[ctrs.join("-")].weight++;
                      if (links[ctrs.join("-")].weight > maxLink) maxLink = links[ctrs.join("-")].weight;
                    }
                    else links[ctrs.join("-")] = {id: ctrs.join("-"), source: ctrs[0], target: ctrs[1], weight: 1};
                  }
                }


                  if (e.value.countries[0] in nodes) {
                    nodes[e.value.countries[0]].size++;
                    e.value.tag in nodes[e.value.countries[0]] ? nodes[e.value.countries[0]][e.value.tag]++ : nodes[e.value.countries[0]][e.value.tag]=1;
                    if (nodes[e.value.countries[0]].size > maxNode) maxNode = nodes[e.value.countries[0]].size;
                  }

                  else {
                    nodes[e.value.countries[0]] = {
                      id: e.value.countries[0],
                      x: Math.random(),
                      y: Math.random(),
                      label: e.value.countries[0],
                      size: 1
                    }
                    nodes[e.value.countries[0]][e.value.tag] = 1;
                  }
              }
            })

            links = _.values(links);
            nodes = _.values(nodes);

            var weightScale = d3.scale.log().range([0,1]).domain([1,maxLink]);
            var maxCol = d3.max(nodes, function(d){return d[$rootScope.keyword] / d.size})
            var colScale = d3.scale.linear().range(["#A7D1D5", '#427A99']).domain([0,maxCol]);



            g = {
              nodes: [],
              edges: []
            };

            nodes.forEach(function(d){

              g.nodes.push({
                id: d.id,
                label: d.label,
                x: d.x,
                y: d.y,
                size:d.size,
                color: colScale(d[$rootScope.keyword] / d.size)
              });

            })

            links.forEach(function(d) {

              g.edges.push({
                id: d.id,
                source: d.source,
                target: d.target,
                size:d.weight,
                color: "rgba(120,120,120,"+weightScale(d.weight)+")"
              });
            })


            if(s == "") {

              s = new sigma({
                settings: {
                  drawEdges: true,
                  animationsTime: 2000,
                  batchEdgesDrawing: false,
                  hideEdgesOnMove: true,
                  minNodeSize:1,
                  maxNodeSize:30,
                  minEdgeSize:0.5,
                  maxEdgeSize:5,
                  font:"Source Serif Pro",
                  labelAlignment:"center"
                }
              });


              s.addRenderer({
                container: document.getElementById('graph-container'),
                type: 'canvas',
              });

              sigma.layouts.configForceLink(s, {
                worker: true,
                gravity:1,
                edgeWeightInfluence:1,
                barnesHutOptimize:true,
                autoStop: true
              });

              s.graph.read(g);
              s.refresh();
            }

            else {
              s.graph.clear();
              s.graph.read(g);
              s.refresh();
            }

            sigma.layouts.startForceLink();

          }
        })
      }
    };
  });
