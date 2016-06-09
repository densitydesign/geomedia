'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('MediaCtrl', function ($scope,$rootScope, $timeout,medias) {



        $scope.computeData = function() {
            $scope.currData = d3.nest()
                .key(function (d) {
                    return medias.getLanguage(d.media.substring(0, 2));
                })
                .key(function (d) {
                    return medias.getMediaName(d.media);
                })
                .rollup(function (leaves) {
                    var obj = {};
                    obj.count = leaves.length;
                    obj.ratio = leaves.filter(function (d) {
                        return d.TAG_event == $rootScope.keyword
                    }).length / leaves.length;
                    return obj;
                })
                .entries($rootScope.bytime.bottom(Infinity))
                .map(function (d) {

                    d.values.forEach(function (e, j) {
                        e.count = e.values.count;
                        e.ratio = e.values.ratio
                        delete e['values'];
                    })
                    return d;
                })
            $scope.$broadcast("media_refresh");
        }


        $rootScope.$watch("[startDate,endDate]",function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData();

            }
        },true)

        $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData();

            }
        },true)

        $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData();

            }
        },true)


        if($rootScope.bytime) {
            $timeout(function(){
                $scope.computeData();
            })

        }

  });
