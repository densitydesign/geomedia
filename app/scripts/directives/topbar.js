'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:topbar
 * @description
 * # topbar
 */
angular.module('geomediaApp')
  .directive('topbar', function ($location, dataservice, $rootScope, $window) {
    return {
      templateUrl: 'views/topbar.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

        scope.go = function(there) {
          $location.path(there);
        }

          scope.locStartsWith = function(x) {
              //console.log($location.path(), x)
              return $location.path().indexOf("/"+x)==0;
          }

          scope.locEqualTo = function(x) {
              return $location.path()== "/"+x;
          }

        $rootScope.$watch("gotdata", function(newVal, oldVal){
          if(newVal) {
            scope.data = dataservice.getData()
            scope.num = scope.data.length;

          }
        })


        $rootScope.$watch("gotmeta", function(newVal, oldVal){
          if(newVal) {
            scope.meta = dataservice.getMetaData()

          }
        })

        scope.goHome = function() {
          $location.path("/");
          $window.location.reload();

        }


        scope.computeMeta = function(){
          scope.totarts = $rootScope.byid.bottom(Infinity).length
          scope.totmedias = _.uniq(_.map($rootScope.byid.bottom(Infinity),function(d){return d.media}))

          scope.mediasln = scope.totmedias.length;
          scope.langsln = _.uniqBy(scope.totmedias,function(d){return d.substr(0,2)}).length;
          scope.countriesln = _.uniqBy(scope.totmedias,function(d){return d.substr(2,3)}).length;
        }

        if($rootScope.byid) {
          $timeout(function(){
            scope.computeMeta();
          })
        }

        $rootScope.$watch("byid", function(newVal, oldVal) {
          if(newVal) {
            scope.computeMeta();
          }
        })

        $rootScope.$watch("[startDate,endDate]",function(newValue,oldValue){

          if($rootScope.byid && $rootScope.medias && newValue != oldValue) {
            scope.computeMeta();
          }
        },true)


        $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
          if($rootScope.byid && $rootScope.medias && newValue!=oldValue) {
            scope.computeMeta();
          }
        },true)

        $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
          if($rootScope.byid && $rootScope.medias && newValue!=oldValue) {
            scope.computeMeta();
          }
        },true)





      }
    };
  });


