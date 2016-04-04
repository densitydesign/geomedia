'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:CountriesTimeCtrl
 * @description
 * # CountriesTimeCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
  .controller('CountriesTimeCtrl', function ($scope, $rootScope, $interval, $filter, geocoordsservice) {

        $scope.state = "play";
        var interval;

        //initialize chart
        var chart = d3.select(".time-line");
        var chartWidth = chart.node().getBoundingClientRect().width;
        var chartHeight = chart.node().getBoundingClientRect().height;


        var margin = {top:30, left:30, right:30, bottom:20};

        var svg = chart.append("svg")
            .attr("width",chartWidth)
            .attr("height",chartHeight)
            .append("g")
            .attr("transform","translate("+margin.left+","+margin.top+")")
            .on("click",function(){
                $scope.click(d3.mouse(this)[0]);
            })

        var clickrect = svg.append("rect")
            .attr("x",0)
            .attr("y",0)
            .attr("width",chartWidth-(margin.right + margin.left))
            .attr("height", chartHeight - (margin.top + margin.bottom))
            .style("fill", "#f9f9f9")
            .style("stroke","none")

        var tline = svg.append("line")
            .attr("x1",0)
            .attr("x2",chartWidth-(margin.right + margin.left))
            .attr("y1",10)
            .attr("y2",10)
            .style("stroke","#e3e3e3");

        var bline = svg.append("line")
            .attr("x1",0)
            .attr("x2",chartWidth-(margin.right + margin.left))
            .attr("y1",10)
            .attr("y2",10)
            .style("stroke-width","2")
            .style("stroke","#bdbdbd");


        var cursor = svg.append("circle")
            .attr("class","cursor")
            .attr("cx",0)
            .attr("cy",10)
            .attr("r",10)
            .style("stroke","#e3e3e3")
            .style("stroke-width",2)
            .style("fill","#f9f9f9");


        var scale = d3.time.scale().domain([$rootScope.startDate, $rootScope.endDate]).range([0,chartWidth-(margin.left+margin.right)]);
        var posScale = d3.scale.ordinal().rangePoints([0,chartWidth-(margin.left+margin.right)]);

        var xAxis = d3.svg.axis()
            .scale(scale)
            .orient("bottom")
            .tickFormat(d3.time.format("%b %y"))
            .innerTickSize(-10)
            .outerTickSize(0);

        var x1 = svg.append("g")
            .attr('class', 'x axis xlines')
            .attr("transform", "translate(0,30)");

        // x1.call(xAxis);

        $rootScope.$watch("[startDate,endDate]",function(newValue){
            if(newValue[0] && newValue[1]) {
                $scope.reformatData();
                $scope.drawTime();
            }
        },true);

        $rootScope.$watch('[gotData,filteredMedias.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData();
                $scope.$broadcast("countries_update");
            }
        },true)

        $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData();
                $scope.$broadcast("countries_update");
            }
        },true)


        $scope.drawTime = function(){
            scale.domain([$rootScope.startDate, $rootScope.endDate])
            x1.call(xAxis);
        }

        $scope.reformatData = function() {
            $scope.computeData();

            if (angular.isDefined(interval)) {
                $interval.cancel(interval)
            }

            //init data and time slots
            $scope.timeslots = _.map($scope.maps,'key');
            posScale.domain($scope.timeslots);
            $scope.position = 0;
            try {
                $scope.data = _.find($scope.maps, function (d) {
                    return d.key == $scope.timeslots[$scope.position]
                }).values;
            }
            catch(err){
                $scope.data=[];
            }
            cursor.transition().duration(500)
                .attr("cx",posScale($scope.timeslots[$scope.position]));

            bline.transition().duration(500)
                .attr("x2",posScale($scope.timeslots[$scope.position]));

            $scope.$broadcast("countries_update");
            $scope.start();
        };

        $scope.setInterval = function() {
            //define interval

            interval = $interval(function(){
                $scope.position++;
                if($scope.position >= $scope.timeslots.length) {
                    $scope.position = 0;
                }
                try {
                    $scope.data = _.find($scope.maps, function (d) {
                        return d.key == $scope.timeslots[$scope.position]
                    }).values;
                }
                catch(err){
                    $scope.data=[];
                }
                $scope.$broadcast("countries_update");

                cursor.transition().duration(500)
                    .attr("cx",posScale($scope.timeslots[$scope.position]));

                bline.transition().duration(500)
                    .attr("x2",posScale($scope.timeslots[$scope.position]));

            },1500)
        }

        $scope.stop = function() {

            $scope.state = "stop";
            if (angular.isDefined(interval)) {
                $interval.cancel(interval)
            }
        }

        $scope.start = function() {

            $scope.state = "play";
            $scope.setInterval();
        }


        $scope.computeData = function() {
            //compute data
            $scope.maps = d3.nest()
                .key(function(d) { return d.time; })
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
        }

            $scope.click = function (xpos) {

                var dist = Infinity;
                var ind = 0;

                posScale.range().every(function (d, i) {
                    //console.log(xpos, d, dist);
                    if (Math.abs(d - xpos) > dist) {
                        ind = i;
                        return false;
                    }
                    else {
                        dist = Math.abs(d - xpos);
                        return true;
                    }
                })

                $scope.position = ind;
                $scope.data = _.find($scope.maps, function (d) {
                    return d.key == $scope.timeslots[$scope.position]
                }).values;

                $scope.$broadcast("countries_update");

                cursor.transition().duration(500)
                    .attr("cx", posScale($scope.timeslots[$scope.position]));

                bline.transition().duration(500)
                    .attr("x2", posScale($scope.timeslots[$scope.position]));


            }

  });
