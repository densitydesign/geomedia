'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:TimeMediaCtrl
 * @description
 * # TimeMediaCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('TimeMediaCtrl', function ($scope,$rootScope) {


    $scope.computeAggregation = function() {
      $scope.streams = d3.nest()
        .key(function(d) { return d.media; })
        .key(function(d) { return d.time; })
        .key(function(d) { return d.TAG_event; })
        .rollup(function(leaves) { return leaves.length; })
        .entries($rootScope.bymedia.bottom(Infinity))
    }

    $scope.getIndex = function(k) {
      return _.findIndex($scope.streams, function(d,i){return d.key == k})
    }

    if($rootScope.bytime) {
      $scope.computeAggregation()
    }


    $rootScope.$watch('bytime',function(newValue,oldValue){
      if (newValue && newValue != oldValue) {
        $scope.computeAggregation()
      }
    })





  });
