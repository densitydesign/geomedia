'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:packSingle
 * @description
 * # packSingle
 */
angular.module('geomediaApp')
  .directive('packsingle', function ($rootScope, $timeout) {
    return {
      template: '<div></div>',
        scope:{
            'packheight':"@",
            'packdata':'&',
            'packindex':"@"
        },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          var chart = d3.select(element[0]);


          var pack = geomedia.pack()
              .chartHeight(scope.packheight)
              .pad(3);


          $timeout(function() {
              var chartWidth = parseInt(chart.style("width").replace("px",""));
              pack.chartWidth(chartWidth)
              scope.drawPack();
             // scope.drawPack();
          })


          scope.$on("media_countries_refresh",function(){
              scope.drawPack();
          })

          scope.$watch("packindex",function(newValue, oldValue){
              if(newValue != oldValue) {
                  scope.drawPack();
              }
          })

          scope.drawPack = function() {
              try {
                  scope.data = _.clone(scope.packdata({k: scope.packindex})).map(function(d){
                      d.values.forEach(function(e,j){
                          e.count = e.values.count;
                          e.ratio = e.values.ratio;
                          delete e['values'];
                      })
                      return d;
                  });
              }
              catch(err) {
                  scope.data = [];
              }

              chart.datum(scope.data).call(pack);
          }



      }
    };
  });
