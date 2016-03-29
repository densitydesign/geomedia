'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:TimeCtrl
 * @description
 * # TimeCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('TimeCtrl', function ($rootScope) {

   /* var chart = d3.select("#stream");
    var chartWidth = parseInt(chart.style("width").replace("px",""));
*/
    $rootScope.$watch("cross", function(newVal, oldVal){

      if(newVal) {
        
      }

    })


  });
