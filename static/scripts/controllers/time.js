'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:TimeCtrl
 * @description
 * # TimeCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('TimeCtrl', function ($scope,$rootScope, $timeout) {

   /* var chart = d3.select("#stream");
    var chartWidth = parseInt(chart.style("width").replace("px",""));
*/
        $rootScope.$watch("[startDate,endDate]",function(newValue,oldValue){

            if(newValue!=oldValue) {
                $scope.reformatData();
            }
        },true)


        $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.reformatData();
            }
        },true)

        $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.reformatData();
            }
        },true)


        $scope.reformatData = function() {
            $scope.data = d3.nest()
                .key(function(d) { return d.time; })
                .key(function(d) { return d.TAG_event; })
                .rollup(function(leaves) { return leaves.length; })
                .entries($rootScope.bytime.bottom(Infinity))

            $scope.$broadcast("time_update");
        }

        if($rootScope.bytime) {
            $timeout(function(){
                $scope.reformatData();
            })

        }

  });
