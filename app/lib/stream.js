/**
 * Created by django on 21/03/16.
 */

(function(){

  var geomedia = window.geomedia || (window.geomedia = {});

  geomedia.stream = function(){

    var chartWidth = 200,
      chartHeight = 600,
      colors = ['#F8E9BA', '#E2BF29']

    function stream(selection){
      selection.each(function(data){
        var margin = {top: 10, right: 12, bottom: 30, left: 12};

        var width = chartWidth - margin.left - margin.right,
          height = chartHeight - margin.top - margin.bottom;

        var chart,
          gradient;


        console.log(data);

        var format = d3.time.format("%d/%m/%y");

        var colorScale = d3.scale.linear()
          .range(colors);

        if (selection.select('svg').empty()){
          chart = selection.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + height/2 + ")");


          gradient = chart.append("defs")
            .append("linearGradient")
            .attr("id", "gradient")
            .attr("x1", "0%")
            .attr("y1", "50%")
            .attr("x2", "100%")
            .attr("y2", "50%")
            .attr("spreadMethod", "pad");

        }
        else
        {
          chart = selection.select('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .select('g')
            .attr("transform", "translate(" + margin.left + "," + height/2 + ")");

          chart.selectAll("stop").remove();


          gradient = chart.select("#gradient");
        }



        var maxes = {}
        var bigmax = 0,
          bigratio = 0;


        data.forEach(function(d,i){

          var vals = []

          d.values.forEach(function(e,j){
            maxes[e.key] = !(e.key in maxes) || maxes[e.key] < e.values ? e.values : maxes[e.key];
            bigmax = e.values > bigmax ? e.values : bigmax;
            vals.push(e.values)
          })


          if(vals.length<2) vals.unshift(0);
          vals.sort(
            function(a,b) {
              return a - b;
            }
          );

          if(vals[0]/vals[1] > bigratio) bigratio = vals[0]/vals[1];
          d.ratio = vals[0]/vals[1];
          d.val = d3.max(vals);

        })

        colorScale.domain([0,bigratio]);



        data.forEach(function(d,z){

          gradient.append("stop")
            .attr("offset", (z/(data.length))*100+"%")
            .attr("stop-color", function(){
              return colorScale(d.ratio);
            })
            .attr("stop-opacity", 1);
        })


        var streamHeight = height;

        var countDomain = [0,bigmax];

        // Scales.

        var yStream = d3.scale.linear()
          .domain(countDomain)
          .range([0, streamHeight]);

        var y2 = d3.scale.linear()
          .domain(countDomain)
          .range([0, 100]);

        //var x = d3.scale.ordinal().rangeRoundBands([0, width], 0);


        var timeDomain = d3.extent(data, function(d){return format.parse(d.key)})
        var x = d3.time.scale()
          .domain(timeDomain)
          .range([0, width]);

        // X-axis.
        var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .innerTickSize(-height)
          .outerTickSize(0)
          .tickFormat(d3.time.format("%b %y"))

        var xAxis2 = d3.svg.axis()
          .scale(x)
          .orient("bottom")
          .innerTickSize(-10)
          .outerTickSize(0)
          .ticks(d3.time.month,1)
          .tickFormat("")


        var area = d3.svg.area()
          .interpolate("basis")
          .x(function(d) { return x(format.parse(d.key)) })
          .y0(function(d) { return -yStream(d.val/2) })
          .y1(function(d) { return yStream(d.val/2) });

        var strm = chart.append("path")
          .style("fill", "url(#gradient)")
          .style("stroke", "none")
          .style("stroke-width", "none")
          .attr("d", function(d){ return area(d)});



        //vertical dynamic legend
        var legend = chart.append("g")
          .attr('class', 'x axis xlines')
          .attr("transform","translate(0,"+(height/2)+")")
          .call(xAxis)

        var legend2 = chart.append("g")
          .attr('class', 'x axis')
          .attr("transform","translate(0,"+(height/2)+")")
          .call(xAxis2)

      }); //end selection
    } // end stream



    stream.chartWidth = function(x){
      if (!arguments.length) return chartWidth;
      chartWidth = x;
      return stream;
    }

    stream.chartHeight = function(x){
      if (!arguments.length) return chartHeight;
      chartHeight = x;
      return stream;
    }

    return stream;

  }

})();
