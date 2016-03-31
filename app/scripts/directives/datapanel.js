'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:datapanel
 * @description
 * # datapanel
 */
angular.module('geomediaApp')
  .directive('datapanel', function (dataservice, $rootScope, $location,$filter) {
    return {
      templateUrl: 'views/datapanel.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

        //time parser and formatter
        scope.format = d3.time.format("%d/%m/%y")


        //sorting medias and countries
        scope.sortMedias = "value"
        scope.sortCountries = "value"

        //medias
        scope.orderMediaByFilteredKey = function(obj) {
          if(scope.sortMedias=="key") {
            var filt = $filter('medias');
            return filt(obj.key)
          }
          else return -obj.value
        };

        //countries
        scope.orderCountryByFilteredKey = function(obj) {
          if(scope.sortCountries=="key") {
            var filt = $filter('countries');
            return filt(obj.key)
          }
          else return -obj.value
        };


        //to be used for elastic lists
        var elasticScale1 = d3.scale.linear().range([20,100]);

        //compute aggregation based on time (String, not actual date)
        scope.aggregateData = function(d) {

          return d3.nest()
            .key(function(d) { return d.time })
            .entries(d);
        }

        //to be run as soon as data is ready
        $rootScope.$watch('gotdata',function(newValue, oldValue){
          if(newValue) {

            //initialize
            scope.data = dataservice.getData()
            scope.meta = dataservice.getMetaData()

            //intialize crossfilter
            $rootScope.cross = crossfilter(scope.data);

            //compute crossfilter dimensions
            $rootScope.bytime = $rootScope.cross.dimension(function(d) { return scope.format.parse(d.time).getTime(); })
            $rootScope.bymedia = $rootScope.cross.dimension(function(d) { return d.media; })
            $rootScope.byid = $rootScope.cross.dimension(function(d) { return d.ID; })
            $rootScope.bycountry = $rootScope.cross.dimension(function(d) { return d['TAG_geo'] })

            //return initial list of medias
            scope.aggrByTime = $rootScope.bytime.group().reduce(reduceAdd, reduceRemove, reduceInitial).top(Infinity);
            $rootScope.startDate = scope.aggrByTime[0].key
            $rootScope.endDate = scope.aggrByTime[scope.aggrByTime.length-1].key

            //compute crossFilter groups
            scope.medias = $rootScope.bymedia.group().reduce(reduceAdd, reduceRemove, reduceInitial).top(Infinity);
            scope.medias.forEach(function(e,j){
              e.active=true;
            })
            scope.countries = $rootScope.bycountry.group().reduce(reduceAdd, reduceRemove, reduceInitial).top(Infinity);
            scope.countries.forEach(function(e,j){
              e.active=true;
            })
          }
        })


        function reduceInitial() {
          return 0;
        }

        function reduceAdd(p, v) {
         return Math.round(p + parseFloat(v.weight));
        }

        function reduceRemove(p, v) {
          return Math.round(p - parseFloat(v.weight));

        }

        //filter by time intervals
        scope.filterByTime = function(start, end) {
          $rootScope.bytime.filterRange([start.getTime(),end.getTime()]);
          scope.$apply();

        }

        //TODO implement this!
        scope.filterByMedia = function(start, end) {
          scope.bytime.filterRange([start.getTime(),end.getTime()]);
        }

        //TODO implement this!
        scope.filterByCountry = function(start, end) {
          scope.bytime.filterRange([start.getTime(),end.getTime()]);
        }


        scope.$on("dateChange", function(event, dates){

          $rootScope.startDate = dates[0];
          $rootScope.endDate = dates[1];

          scope.filterByTime($rootScope.startDate, $rootScope.endDate);

        })
      }
    };
  });
