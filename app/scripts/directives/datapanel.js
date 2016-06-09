'use strict';

/**
 * @ngdoc directive
 * @name geomediaApp.directive:datapanel
 * @description
 * # datapanel
 */
angular.module('geomediaApp')
  .directive('datapanel', function (dataservice, medias, $rootScope, $location,$filter, $timeout) {
    return {
      templateUrl: 'views/datapanel.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {

        //time parser and formatter
        scope.format = d3.time.format("%d/%m/%y")
        scope.txtfiltMedia="";
        scope.txtfiltCountries = "";
        scope.filteredlangs = {};
        scope.filteredtypes = {};
        scope.mediaservice = medias;


        $rootScope.filteredMedias = [];
        $rootScope.filteredCountries = [];


        scope.filterMedia = function(m) {
          if(m.active) {
            m.active = false;
            $rootScope.filteredMedias.push(m.key)
          }
          else {
            m.active = true;
            var index = $rootScope.filteredMedias.indexOf(m.key);    // <-- Not supported in <IE9
            if (index !== -1) {
              $rootScope.filteredMedias.splice(index, 1);
            }
          }
          scope.filterByMedia($rootScope.filteredMedias);
        }

        scope.filterCountry = function(c) {
          if(c.active) {
            c.active = false;
            $rootScope.filteredCountries.push(c.key)
          }
          else {
            c.active = true;
            var index = $rootScope.filteredCountries.indexOf(c.key);    // <-- Not supported in <IE9
            if (index !== -1) {
              $rootScope.filteredCountries.splice(index, 1);
            }
          }
          scope.filterByCountry($rootScope.filteredCountries);
        };


        //sorting medias and countries
        scope.sortMedias = "value";
        scope.sortCountries = "value";

        //medias
        scope.orderMediaByFilteredKey = function(obj) {
          if(scope.sortMedias=="key") {
            var filt = $filter('medias');
            return filt(obj.key)
          }
          else return -obj.value.count
        };

        //countries
        scope.orderCountryByFilteredKey = function(obj) {
          if(scope.sortCountries=="key") {
            var filt = $filter('countries');
            return filt(obj.key)
          }
          else return -obj.value
        };

        scope.selectAllCountries = function() {
          $rootScope.countries.forEach(function(d){
            d.active = true;
          })
          scope.filterByCountry([]);
          $rootScope.filteredCountries = [];

        }

        scope.selectAllMedia = function() {
          $rootScope.medias.forEach(function(d){
            d.active = true;
          })
          scope.filterByMedia([]);
          $rootScope.filteredMedias = [];

        }

        scope.clearAllMedias = function() {
          $rootScope.updating = true;
          $timeout(function(){
          $rootScope.medias.forEach(function(d){
            d.active = false;
          })
          $rootScope.filteredMedias = _.map($rootScope.medias,'key');
          scope.filterByMedia($rootScope.filteredMedias);
          $rootScope.updating = false;
          })

        }

        scope.clearAllCountries = function() {
          $rootScope.countries.forEach(function(d){
            d.active = false;
          })
          $rootScope.filteredCountries = _.map($rootScope.countries,'key');
          scope.filterByCountry($rootScope.filteredCountries);

        }

        scope.hasLang = function(ln) {
          var found = _.find($rootScope.medias, function(d){
            return d.key.substring(0,2) == ln && $rootScope.filteredMedias.indexOf(d.key)<0;
          })

          return found;
        }

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
            scope.aggrByTime = $rootScope.bytime.group().reduce(reduceSingleAdd, reduceSingleRemove, reduceSingleInitial).top(Infinity);


            $rootScope.endDate = scope.format.parse($rootScope.bytime.top(1)[0].time);
            $rootScope.startDate = scope.format.parse($rootScope.bytime.bottom(1)[0].time);
            $rootScope.times = d3_time.timeDay.range($rootScope.startDate, $rootScope.endDate,7)


            //compute crossFilter groups
            $rootScope.medias = $rootScope.bymedia.group().reduce(reduceAdd, reduceRemove, reduceInitial).top(Infinity);
            $rootScope.medias.forEach(function(e,j){
              e.active=true;
                e.name = medias.getMediaName(e.key);
            })


              //console.log(_.map($rootScope.medias,"key"));
            $rootScope.countries = $rootScope.bycountry.group().reduce(reduceSingleAdd, reduceSingleRemove, reduceSingleInitial).top(Infinity);
            $rootScope.countries.forEach(function(e,j){
              e.active = true;
                e.name = $filter('countries')(e.key);
            })

              $rootScope.loading=false;
          }
        })

          scope.filterByLanguage = function(ln) {

              var isfiltered = false;

              var langMedias = $rootScope.medias.filter(function(d){
                  return d.key.indexOf(ln)==0;
              })

            if(ln in scope.filteredlangs && scope.filteredlangs[ln]) {
              isfiltered = true;
            }

            langMedias.forEach(function(c){



              if(isfiltered) {
                if (!c.active) {
                  c.active = true;
                  var index = $rootScope.filteredMedias.indexOf(c.key);    // <-- Not supported in <IE9
                  if (index !== -1) {
                    $rootScope.filteredMedias.splice(index, 1);
                  }
                }
              }

              else {

                if (c.active) {
                  c.active = false;
                  $rootScope.filteredMedias
                    .push(c.key)
                }
              }

              })

              scope.filteredlangs[ln] = !scope.filteredlangs[ln];
              scope.filterByMedia($rootScope.filteredMedias);
          }


          scope.filterByRSS = function(rss) {

            var isfiltered = false;

              var rssMedias = $rootScope.medias.filter(function(d){
                  return medias.getMediaType(d.key)  == rss;
              })

              rssMedias.forEach(function(c){

                  if(c.active) {
                      c.active = false;
                      $rootScope.filteredMedias
                          .push(c.key)
                  }

              })
              scope.filterByMedia($rootScope.filteredMedias);
          }

        //reduce functions
        function reduceInitial() {
          return {count : 0, articles : 0, ontopic : 0};
        }

        function reduceAdd(p, v) {
         //return p + parseFloat(v.weight);
          //return p+1;
          p.count++;
          p.articles+=parseFloat(v.weight);
          if(v["TAG_event"] == $rootScope.keyword) p.ontopic++;
          return p;
        }

        function reduceRemove(p, v) {
          //return p - parseFloat(v.weight);
          //return p-1
          p.count--;
          p.articles-=parseFloat(v.weight);
          if(v["TAG_event"] == $rootScope.keyword) p.ontopic--;
          return p;
        }



        function reduceSingleInitial() {
          return 0;
        }

        function reduceSingleAdd(p, v) {
          return p+1;
        }

        function reduceSingleRemove(p, v) {
          return p-1
        }


        //filter by time intervals
        scope.filterByTime = function(start, end) {
          $rootScope.bytime.filterRange([start.getTime(),end.getTime()]);

          //console.log($rootScope.countries[1])
          scope.$apply();
          $rootScope.updating = false;

        }

        //filter by array of medias
        scope.filterByMedia = function(filtmedias) {

          if(filtmedias.length) {

            $rootScope.bymedia.filterFunction(function (d) {
              return filtmedias.indexOf(d) < 0;
            })

          }

          else $rootScope.bymedia.filterAll();
        }

        //filter by array of countries
        scope.filterByCountry = function(filtcountries) {

          if(filtcountries.length) {
            $rootScope.bycountry.filterFunction(function (d) {
              return filtcountries.indexOf(d) < 0;
            })
          }
          else $rootScope.bycountry.filterAll();
        }

        //listener on dateChange
        scope.$on("dateChange", function(event, dates){


          $rootScope.startDate = dates[0];
          $rootScope.endDate = dates[1];

          $rootScope.times = d3_time.timeDay.range($rootScope.startDate, $rootScope.endDate,7)

          scope.filterByTime($rootScope.startDate, $rootScope.endDate);

        })
      }
    };
  });
