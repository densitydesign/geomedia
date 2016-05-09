'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:MediaCountriesCtrl
 * @description
 * # MediaCountriesCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('MediaCountriesCtrl', function ($scope, $rootScope, medias, $timeout, $window) {


        $scope.packName = "";

        $scope.packheight = ($window.innerHeight *.9-100) / 2;

        $scope.getIndex = function(k) {
            return _.findIndex($scope.packs, function(d,i){return d.key == k})
        }

        $scope.getData = function(k) {
            var res = _.sortBy(_.find($scope.packs,function(d){return d.key == k}).values,function(d){return $scope.format.parse(d.key)});
            return res;
        }

        $scope.reformatData = function() {
            $scope.packs = d3.nest()
                .key(function(d) { return d.TAG_geo; })
                .key(function(d) { return medias.getLanguage(d.media.substring(0,2)); })
                .key(function(d) { return medias.getMediaName(d.media); })
                .rollup(function(leaves) {
                    var obj = {};
                    obj.count = leaves.length;
                    obj.ratio = leaves.filter(function(d){return d.TAG_event == "Ebola"}).length / leaves.length;
                    return obj; })

                .entries($rootScope.bymedia.bottom(Infinity))
            $rootScope.$broadcast("media_countries_refresh");
        };

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

        $rootScope.$watch("countries",function(newVal){
            if(newVal && !$scope.entries) {
                $scope.entries = $rootScope.countries.filter(function(e){return e.key!=""}).slice(0,4);
                $scope.choices = $rootScope.countries.map(function(d){return {key:d.key, label: d.name}});
                $timeout(function(){
                    $scope.reformatData();
                })
            }
        })


        $scope.onSelect = function(item, model, label, event, index) {
            $scope.entries[index] = $scope.packs.filter(function(d){return d.key ==item.key})[0];
        }




  });
