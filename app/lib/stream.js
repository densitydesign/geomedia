/**
 * Created by django on 21/03/16.
 */

(function(){

  var geomedia = window.geomedia || (window.geomedia = {});

  geomedia.stream = function(){

    var chartWidth = 200,
      chartHeight = 600,
      colors = ['#F8E9BA', '#E2BF29'],
      showx = true,
        prefix = "",
      keyword = "",
        emit = false;

    function stream(selection){
      selection.each(function(data){
        var margin = {top: 10, right: 12, bottom: 30, left: 12};

        if(showx) margin.left=60;

        var width = chartWidth - margin.left - margin.right,
          height = chartHeight - margin.top - margin.bottom;

        var chart,
          gradient, ttip;

        var format = d3.time.format("%d/%m/%y");

        var colorScale = d3.scale.log()
          .range(colors).clamp(true).nice();

        if (selection.select('svg').empty()){
          chart = selection.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + height/2 + ")");

            ttip = selection.select("svg").append("g")
                .attr("class","strm-tooltip")
                .style("opacity",0)
                .attr("transform","translate(-1000,-1000)")

            ttip.append("rect")
                .attr("x",0)
                .attr("y",0)
                .attr("width",250)
                .attr("height",130)
                .style("fill","#f9f9f9")
                .style("stroke","#e4e4e4");


            ttip.append("text")
                .attr("class","ttip-title")
                .text("")
                .attr("x",10)
                .attr("y",20);

            ttip.append("text")
                .attr("class","ttip-articles")
                .text("")
                .attr("x",10)
                .attr("y",50);

          ttip.append("text")
            .attr("class","ttip-topic")
            .text("")
            .attr("x",10)
            .attr("y",80);

            ttip.append("text")
                .attr("class","ttip-ratio")
                .text("")
                .attr("x",10)
                .attr("y",110);

          gradient = chart.append("defs")
            .append("linearGradient")
            .attr("id", prefix+"gradient")
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

          ttip = chart.select(".strm-tooltip")

          gradient = chart.select("#"+prefix+"gradient");
        }



        var maxes = {}
        var bigmax = 0,
          bigratio = 0;


        data.forEach(function(d,i){

            if(!('val' in d)) {

                var vals = []

                d.values.forEach(function (e, j) {
                    maxes[e.key] = !(e.key in maxes) || maxes[e.key] < e.values ? e.values : maxes[e.key];
                    bigmax = e.values > bigmax ? e.values : bigmax;
                    vals.push(e.values)
                })


                if (vals.length < 2) vals.unshift(0);
                vals.sort(
                    function (a, b) {
                        return a - b;
                    }
                );

                if (vals[0] / vals[1] > bigratio) bigratio = vals[0] / vals[1];
                d.ratio = vals[0] / vals[1];
                d.val = d3.max(vals);
            }
        })

        colorScale.domain([0.001,bigratio]);



        data.forEach(function(d,z){

          gradient.append("stop")
            .attr("offset", (z/(data.length))*100+"%")
            .attr("stop-color", function(){
              if (d.ratio == 0) return colors[0];
              else return colorScale(d.ratio);
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
                .ticks(d3.time.month, 1)
                .tickFormat("")



        var area = d3.svg.area()
          .interpolate("basis")
          .x(function(d) { return x(format.parse(d.key)) })
          .y0(function(d) { return -yStream(d.val/2) })
          .y1(function(d) { return yStream(d.val/2) });

        var strm = chart.append("path")
          .style("fill", "url(#"+prefix+"gradient)")
          .style("stroke", "none")
          .style("stroke-width", "none")
          .attr("d", function(d){ return area(d)})


            .on('mousemove', showtip)
            .on('mouseout', hidetip);


          if(showx) {

            var yleg = d3.scale.linear()
              .domain([-bigmax, 0, bigmax])
              .range([0, streamHeight/2, streamHeight]);

            var yAxis = d3.svg.axis()
              .scale(yleg)
              .orient("left")
              .innerTickSize(10)
              .outerTickSize(0)
              .tickFormat(function(d){
                if (d<0) return -d;
                else return d;
              })


              //vertical dynamic legend
              var legend = chart.append("g")
                  .attr('class', 'x axis xlines')
                  .attr("transform", "translate(0," + (height / 2) + ")")
                  .call(xAxis)

              var legend2 = chart.append("g")
                  .attr('class', 'x axis')
                  .attr("transform", "translate(0," + (height / 2) + ")")
                  .call(xAxis2)

            var ylegend = chart.append("g")
              .attr('class', 'y axis')
              .attr("transform", "translate(0," + (- height / 2) + ")")
              .call(yAxis);
          }

          function showtip() {
              var coords = d3.mouse(this);


              var dist = Infinity;
              var xdate = x.invert(coords[0]);
              var mydata = {}
              for(var d in data) {
                  var k = format.parse(data[d].key);
                  if(Math.abs(xdate-k) < dist) dist = Math.abs(xdate-k);
                  else {
                      mydata = data[d];
                      break;
                  }
              }

              if(!emit) {
                  ttip.attr("transform", "translate(" + coords[0] + "," + (coords[1] + height / 2 - 140) + ")")
                      .style("opacity", 1);
                  ttip.select(".ttip-title").text("Week of "+ mydata.key)
                  var arts = ttip.select(".ttip-articles")
                arts.selectAll("tspan").remove()
                    arts.append("tspan").text("articles ")
                arts.append("tspan").attr("class","yellow-fill").text(mydata.val)

                   // .text("Articles " + mydata.val)

                var topic = ttip.select(".ttip-topic")
                topic.selectAll("tspan").remove()
                topic.append("tspan").text("articles on "+keyword+" ")
                topic.append("tspan").attr("class","yellow-fill").text(Math.round(mydata.val * mydata.ratio))


                var perc = ttip.select(".ttip-ratio")
                perc.selectAll("tspan").remove()
                perc.append("tspan").text("% of articles on "+keyword+" ")
                perc.append("tspan").attr("class","yellow-fill").text((mydata.ratio * 100).toFixed(2) + "%")
                  //.text("Ratio " + (mydata.ratio * 100).toFixed(2) + "%");
              }
              else{
                  emit.ttip([d3.event,mydata]);
              }
          }

          function hidetip() {
              if(!emit) {
                  ttip.style("opacity", 0)
                      .attr("transform", "translate(-1000,-1000)")
              }
              else{
                  emit.ttoff()
              }
          }

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

      stream.colors = function(x){
          if (!arguments.length) return colors;
          colors = x;
          return stream;
      }

      stream.showx = function(x){
          if (!arguments.length) return showx;
          showx = x;
          return stream;
      }

      stream.prefix = function(x){
          if (!arguments.length) return prefix;
          prefix = x;
          return stream;
      }

    stream.keyword = function(x){
      if (!arguments.length) return keyword;
      keyword = x;
      return stream;
    }

      stream.emit = function(x){
          if (!arguments.length) return emit;
          emit = x;
          return stream;
      }

    return stream;

  }

})();
