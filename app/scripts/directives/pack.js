'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:pack.js
 * @description
 * # pack.js
 */
angular.module('geomediaApp')
  .directive('pack', function ($rootScope, medias, $window) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


        var chart = d3.select(element[0]);
        var chartWidth = parseInt(chart.style("width").replace("px",""));
        var chartHeight = ($window.innerHeight *.9-200);

        var pack = geomedia.pack()
          .chartWidth(chartWidth)
          .chartHeight(chartHeight)
          .keyword($rootScope.keyword)



        scope.drawPack = function() {
/*
          var nest = d3.nest()
            .key(function(d) { return medias.getLanguage(d.media.substring(0,2)); })
            .key(function(d) { return medias.getMediaName(d.media); })
            .rollup(function(leaves) {
              var obj = {};
              obj.count = leaves.length;
              obj.ratio = leaves.filter(function(d){return d.TAG_event == "Ebola"}).length / leaves.length;
              return obj; })
            .entries($rootScope.bytime.bottom(Infinity))
            .map(function(d){

              d.values.forEach(function(e,j){
                e.count = e.values.count;
                e.ratio = e.values.ratio
                delete e['values'];
              })

              return d;

            })
*/
          chart.datum(scope.currData).call(pack)

        }

          scope.$on("media_refresh",function() {
              scope.drawPack();
          });
/*
         $rootScope.$watch("[gotData,startDate,endDate]",function(newValue,oldValue){
         if (newValue && newValue != oldValue) {
           scope.drawPack();
          }
        }, true)

        $rootScope.$watch("[gotData,filteredMedias.length]",function(newValue,oldValue){
          if (newValue) {

            scope.drawPack();
          }
        },true)

        $rootScope.$watch("[gotData,filteredCountries.length]",function(newValue,oldValue){
          if (newValue) {
            scope.drawPack();
          }
        },true)
*/
          //listen for event on media_time controller
        //  scope.$on('')


      }
    };
  });
