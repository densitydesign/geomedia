'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:TimeCountriesCtrl
 * @description
 * # TimeCountriesCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('TimeCountriesCtrl', function ($scope, $rootScope, $window) {
        $scope.streamName = "";
        $scope.tip = {};

        $scope.streamheight = ($window.innerHeight *.9-100) / 10;

        $scope.getIndex = function(k) {
            return _.findIndex($scope.streams, function(d,i){return d.key == k})
        }

        $scope.getData = function(k) {
            var res = _.sortBy(_.find($scope.streams,function(d){return d.key == k}).values,function(d){return $scope.format.parse(d.key)});
            return res;
        }
/*
        if($rootScope.bytime) {
            $scope.reformatData();
        }
*/
        $scope.$on("new_tooltip",function(event,d){
            $scope.tip = d;
            //console.log($scope.tip);
            $scope.$apply();
        })

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
            $scope.streams = d3.nest()
                .key(function(d) { return d.TAG_geo; })
                .key(function(d) { return d.time; })
                .key(function(d) { return d.TAG_event; })
                .rollup(function(leaves) { return leaves.length; })
                .entries($rootScope.bymedia.bottom(Infinity))



        };

        $rootScope.$watch("countries",function(newVal){
            if(newVal && !$scope.entries) {
                $scope.entries = $rootScope.countries.filter(function(e){return e.key!=""}).slice(0,10);

                $scope.choices = $rootScope.countries.map(function(d){return {key:d.key, label: d.name}});
            }
        })


        $scope.onSelect = function(item, model, label, event, index) {
            $scope.entries[index] = $scope.streams.filter(function(d){return d.key ==item.key})[0];
        }

        if($rootScope.bytime) {
            $scope.reformatData();
        }
  });
