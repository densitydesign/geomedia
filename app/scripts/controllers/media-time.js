'use strict';

/**
 * @ngdoc function
 * @name geomediaApp.controller:MediaTimeCtrl
 * @description
 * # MediaTimeCtrl
 * Controller of the geomediaApp
 */
angular.module('geomediaApp')
    .controller('MediaTimeCtrl', function ($scope, $rootScope, $interval, medias) {

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
                $scope.$broadcast("media_refresh");
            }
        },true)

        $rootScope.$watch('[gotData,filteredCountries.length]',function(newValue,oldValue){
            if(newValue!=oldValue) {
                $scope.computeData();
                $scope.$broadcast("media_refresh");
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
            $scope.timeslots = _.map($scope.packs,'key');
            posScale.domain($scope.timeslots);
            $scope.position = 0;
           try {
               $scope.currData = _.find($scope.packs, function (d) {
                   return d.key == $scope.timeslots[$scope.position]
               }).values;
           }
            catch(err){
                $scope.currData=[];
            }
            cursor.transition().duration(500)
                .attr("cx",posScale($scope.timeslots[$scope.position]));

            bline.transition().duration(500)
                .attr("x2",posScale($scope.timeslots[$scope.position]));

            $scope.$broadcast("media_refresh");
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
                    $scope.currData = _.find($scope.packs, function (d) {
                        return d.key == $scope.timeslots[$scope.position]
                    }).values;
                }
                catch(err){
                    $scope.currData=[];
                }
                $scope.$broadcast("media_refresh");

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
            $scope.packs = d3.nest()
                .key(function(d) { return d.time; })
                .key(function(d) { return medias.getLanguage(d.media.substring(0,2)); })
                .key(function(d) { return medias.getMediaName(d.media); })
                .rollup(function(leaves) {
                    var obj = {};
                    obj.count = leaves.length;
                    obj.ratio = leaves.filter(function(d){return d.TAG_event == $rootScope.keyword}).length / leaves.length;
                    return obj; })
                .entries($rootScope.bymedia.bottom(Infinity));

            $scope.packs.forEach(function(a,j){
                a.values.map(function (d) {

                    d.values.forEach(function (e, j) {
                        e.count = e.values.count;
                        e.ratio = e.values.ratio;
                        delete e['values'];
                    })
                    return d;
                })
            })

            $scope.packs.sort(function(a,b){
                return $scope.format.parse(a.key) - $scope.format.parse(b.key)
            })

            $scope.click = function(xpos) {

                var dist = Infinity;
                var ind = 0;

                posScale.range().every(function(d,i){
                    //console.log(xpos,d,dist);
                    if(Math.abs(d-xpos) > dist) {
                        ind = i;
                        return false;
                    }
                    else {
                        dist = Math.abs(d-xpos);
                        return true;
                    }
                })

                $scope.position = ind;
                $scope.currData = _.find($scope.packs,function(d){return d.key == $scope.timeslots[$scope.position]}).values;

                $scope.$broadcast("media_refresh");

                cursor.transition().duration(500)
                    .attr("cx",posScale($scope.timeslots[$scope.position]));

                bline.transition().duration(500)
                    .attr("x2",posScale($scope.timeslots[$scope.position]));


            }


        }
    });
