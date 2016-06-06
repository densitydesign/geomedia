'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:streamSingle
 * @description
 * # streamSingle
 */
angular.module('geomediaApp')
  .directive('streamsingle', function ($rootScope, $timeout) {
    return {
      template: '<div></div>',
        scope:{
            'streamdata':'&',
            'streamindex':"@",
            'streamheight':"@",
            'streamcolors':"="
            },
      restrict: 'E',
      link: function postLink(scope, element, attrs) {


          var ttip = d3.dispatch("ttip","ttoff");

          ttip.on("ttip",function(d){
              $rootScope.$broadcast('new_tooltip',d[1]);
              $(".ttip-s").css("top",d[0].clientY).css("left",d[0].clientX).show();
          })

          ttip.on("ttoff",function(){

              $(".ttip-s").hide()
          })
          //time parser and formatter
          scope.format = d3.time.format("%d/%m/%y");

          var chart = d3.select(element[0]);
          element.height(scope.streamheight);
          var stream = geomedia.stream();
          stream.colors(scope.streamcolors)
              .prefix(scope.streamindex)
              .emit(ttip);


          $timeout(function(){
              var chartWidth = element[0].offsetWidth;
              var chartHeight = scope.streamheight;
              stream
                  .chartWidth(chartWidth)
                  .chartHeight(chartHeight)
                  .showx(false)

              scope.data = scope.streamdata({k:scope.streamindex});
             scope.prepareData();

          })

          scope.prepareData = function() {

              try {
                  scope.data = _.cloneDeep(scope.streamdata({k: scope.streamindex}));
              }
              catch(err) {
                  scope.data = [];
              }

              $(element[0]).empty();
              $rootScope.times.forEach(function(d,j){
                  var elementPos = scope.data.map(function(x) {return x.key; }).indexOf(scope.format(d));
                  if(elementPos<0) {
                      scope.data.splice(j,0,{key:scope.format(new Date(d)), val:0, ratio:0});
                  }
              })
              chart.datum(scope.data).call(stream);
          }


          scope.$watch("streamindex",function(newValue, oldValue){
              if(newValue != oldValue) {
                  scope.prepareData();
              }
          })


          $rootScope.$watch("[startDate,endDate]",function(newValue,oldValue){
              if(newValue!=oldValue) {
                  scope.prepareData();
              }
          },true)


          $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
              if(newValue!=oldValue) {
                  scope.prepareData();
              }
          },true)

          $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
              if(newValue!=oldValue) {
                  scope.prepareData();
              }
          },true)




      }
    };
  });
