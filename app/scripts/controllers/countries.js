'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:CountriesCtrl
 * @description
 * # CountriesCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('CountriesCtrl', function ($scope,$rootScope, $filter, geocoordsservice) {


        $rootScope.$watch("[startDate,endDate]",function(newValue){
            if(newValue[0] && newValue[1]) {
                $scope.computeData()
                //console.log(JSON.stringify($scope.data));
                $scope.$broadcast("countries_update");
            }
        },true);

        $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData()
                //console.log(JSON.stringify($scope.data));
                $scope.$broadcast("countries_update");
            }
        },true);

        $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData()
                //console.log(JSON.stringify($scope.data));
                $scope.$broadcast("countries_update");
            }
        },true);


        $scope.computeData = function() {
            $scope.data = d3.nest()
                .key(function(d) { return d.TAG_geo; })
                .key(function(d) { return d.TAG_event })
                .rollup(function(leaves) {return leaves.length})
                .entries($rootScope.bymedia.bottom(Infinity))
                .filter(function(d){return d.key!=""})
                .map(function (d) {
                    d.label = $filter('countries')(d.key);

                    var coords = geocoordsservice.getCoords(d.key);
                    console.log(coords);
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
                    return d;
                })


        }

    
  });
