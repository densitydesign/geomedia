'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:CountriesMediaCtrl
 * @description
 * # CountriesMediaCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('CountriesMediaCtrl', function ($scope, $rootScope, $window, geocoordsservice, $filter, $timeout) {


        $scope.packName = "";

        $scope.mapheight = ($window.innerHeight *.9-100) / 2;

        $scope.getIndex = function(k) {
            return _.findIndex($scope.maps, function(d,i){return d.key == k})
        }

        $scope.getData = function(k) {
            var res = _.sortBy(_.find($scope.maps,function(d){return d.key == k}).values,function(d){return $scope.format.parse(d.key)});
            return res;
        }

        $scope.reformatData = function() {
            $scope.maps = d3.nest()
                .key(function(d) { return d.media; })
                .key(function(d) { return d.TAG_geo; })
                .key(function(d) { return d.TAG_event })
                .rollup(function(leaves) {return leaves.length})
                .entries($rootScope.bymedia.bottom(Infinity))

                .map(function (a) {

                    _.remove(a.values,function(s){return s.key==""});

                    a.values.forEach(function(d){
                        d.label = $filter('countries')(d.key);

                        var coords = geocoordsservice.getCoords(d.key);

                        d['lon'] = coords.lon;
                        d['lat'] = coords.lat;


                        d.values.forEach(function (e, j) {
                            e.key = e.key==""? e.key="none" : e.key;
                            d[e.key] = e.values;
                            delete e['values'];
                        })

                        delete d['values'];
                        if(!($rootScope.keyword in d)) d[$rootScope.keyword] = 0;
                        if(!('none' in d)) d['none'] = 0;

                        })
                    return a;
                })

            //console.log($scope.maps);
            $rootScope.$broadcast("countries_media_refresh");
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

        $rootScope.$watch("medias",function(newVal){
            if(newVal && !$scope.entries) {
                $scope.entries = $rootScope.medias.slice(0,4);
                $scope.choices = $rootScope.medias.map(function(d){return {key:d.key, label: d.name}});
                $timeout(function(){
                    $scope.reformatData();
                })
            }
        })

        $scope.onSelect = function(item, model, label, event, index) {
            $scope.entries[index] = $scope.maps.filter(function(d){return d.key ==item.key})[0];
        }




    });
