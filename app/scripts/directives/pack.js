'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:pack.js
 * @description
 * # pack.js
 */
angular.module('geomediaApp')
  .directive('pack', function ($rootScope, medias) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        var chart = d3.select(element[0]);
        var chartWidth = parseInt(chart.style("width").replace("px",""));

        var pack = geomedia.pack()
          .chartWidth(chartWidth)




        $rootScope.$watch("bytime",function(newValue,oldValue){
          if (newValue) {



            var nest = d3.nest()
              .key(function(d) { return medias.getLanguage(d.media.substring(0,2)); })
              .key(function(d) { return medias.getMediaName(d.media); })
              .rollup(function(leaves) {
                var obj = {};
                obj.count = leaves.length;
                obj.ratio = leaves.filter(function(d){return d.TAG_event == "Ebola"}).length / leaves.filter(function(d){return d.TAG_event == ""}).length;
                return obj; })
              .entries(newValue.bottom(Infinity))
              .map(function(d){

                d.values.forEach(function(e,j){
                  e.count = e.values.count;
                  e.ratio = e.values.ratio
                  delete e['values'];
                })

                return d;

              })

            chart.datum(nest).call(pack)

          }
        })

      }
    };
  });