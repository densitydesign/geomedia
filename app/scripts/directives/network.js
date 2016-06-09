'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:network
 * @description
 * # network
 */
angular.module('geomediaApp')
  .directive('network', function ($rootScope, $filter) {
    return {
      template: '<div id="graph-container"></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {



        var chart = d3.select(element[0]);
        var chartWidth = parseInt(chart.style("width").replace("px", ""));

        var s = "";
        var tooltips = null;

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
            p.countries.splice(i, 1);
          }
          return p
        }

        function reduceInitial() {
          return {countries:[],tag:"empty"};
        }




          scope.$on('go',function(){
                  scope.drawNetwork();

          })

        $rootScope.$watch('filteredMedias.length',function(newValue,oldValue){
          if (newValue) {
            scope.drawNetwork();
          }
        })

        $rootScope.$watch('filteredCountries.length',function(newValue,oldValue){
          if (newValue!=oldValue) {
            console.log("recompute network");
            scope.drawNetwork();
          }
        })

        $rootScope.$watch("[startDate,nedDate]",function(newValue,oldValue){
          if (newValue && newValue != oldValue) {
            scope.drawNetwork();
          }
        })



        scope.drawNetwork = function() {
          if(sigma.layouts.isForceLinkRunning()) {
            sigma.layouts.stopForceLink();
          }

          var nodes = {}
          var links = {}

          g = {
            nodes: [],
            edges: []
          };

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
                    e.value.tag in nodes[e.value.countries[i]] ? nodes[e.value.countries[i]][e.value.tag]++ : nodes[e.value.countries[i]][e.value.tag] = 1;
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

                  if (e.value.tag == $rootScope.keyword) {
                    if (ctrs.join("-") in links) {
                      links[ctrs.join("-")].weight++;
                      if (links[ctrs.join("-")].weight > maxLink) maxLink = links[ctrs.join("-")].weight;
                    }
                    else links[ctrs.join("-")] = {id: ctrs.join("-"), source: ctrs[0], target: ctrs[1], weight: 1};
                  }
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




          nodes = _.values(nodes).filter(function(e){return $rootScope.keyword in e});

          var existingNodes = _.map(nodes,'id');
          links = _.values(links).filter(function(e){return existingNodes.indexOf(e.source)>-1 && existingNodes.indexOf(e.target)>-1 });

          var weightScale = d3.scale.log().range([0,1]).domain([1,maxLink]);
          var maxCol = d3.max(nodes, function(d){return d[$rootScope.keyword] / d.size})
          var colScale = d3.scale.linear().range(["#A7D1D5", '#427A99']).domain([0,maxCol]);




          nodes.forEach(function(d){

            g.nodes.push({
              id: d.id,
              label: d.label,
              name: $filter('countries')(d.label),
              x: d.x,
              y: d.y,
              ratio:(d[$rootScope.keyword]/d.size*100).toFixed(2),
              size:d[$rootScope.keyword],
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
                mouseEnabled:true,
                enableHovering:true,
                labelAlignment:"center"
              }
            });


            var ttipconfig = {
              node: [{
                show: 'hovers',
                hide: 'hovers',
                /*cssClass: 'sigma-tooltip',*/
                position: 'top',
                /*template:'<div class="arrow"></div>' +
                '<div class="sigma-tooltip-header"> Menu </div>'*/
                //autoadjust: true,
               template: '<div class="arrow"></div>' +
                ' <div class="sigma-tooltip-header">{{name}}</div>' +
                '  <div class="sigma-tooltip-body">' +
                //'    <table>' +
                '      <div class="sigma-ttip-line"><span>articles on ' + $rootScope.keyword + '</span> <b class="blu"> {{size}}</b></div>' +
               '      <div class="sigma-ttip-line"><span>% of articles on ' + $rootScope.keyword + '</span> <b class="blu"> {{ratio}}%</b></div>' +
                //'    </table>' +
                '  </div>',

                renderer: function (node, template) {
                  // The function context is s.graph
                  node.degree = this.degree(node.id);
                  // Returns an HTML string:
                  return Mustache.render(template, node);
                  // Returns a DOM Element:
                  //var el = document.createElement('div');
                  //return el.innerHTML = Mustache.render(template, node);
                }
              }]
            }




            s.addRenderer({
              container: document.getElementById('graph-container'),
              type: 'canvas',
            });




            sigma.layouts.configForceLink(s, {
              worker: true,
              gravity:1,
              edgeWeightInfluence:10,
              barnesHutOptimize:true,
              autoStop: true
            });

            s.graph.read(g);
            s.refresh();



            var tooltips = sigma.plugins.tooltips(s, s.renderers[0], ttipconfig);
            tooltips.bind('shown', function(event) {
              console.log('tooltip shown', event);
            });
            tooltips.bind('hidden', function(event) {
              console.log('tooltip hidden', event);
            });
          }

          else {
            s.graph.clear();
            s.graph.read(g);
            s.refresh();
          }

          sigma.layouts.startForceLink();

        }


      }
    };
  });
