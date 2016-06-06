(function(){

  var geomedia = window.geomedia || (window.geomedia = {});

  geomedia.timeline = function(){

    var chartWidth = 200,
      chartHeight = 120,
      events,
      extent,
      fixed = false,
      dispatch = d3.dispatch("brushed");

    function timeline(selection){
      selection.each(function(data){
        var margin = {top: 10, right: 12, bottom: 30, left: 12};

        var width = chartWidth - margin.left - margin.right,
          height = chartHeight - margin.top - margin.bottom;

        var chart,
          labelM,
          labelD;

        if (selection.select('svg').empty()){
          chart = selection.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            //.attr("width", width)
            //.attr("height", height)
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          labelM = chart.append("g")
            .attr("transform", "translate(0," + height + ")")
            .attr("class", "x axis labelM")

          // labelD = chart.append("g")
          //   .attr("class", "x axis labelD")
          //   .attr("transform", "translate(0," + height + ")")

        }
        else
        {
          chart = selection.select('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .select('g')
            //.attr("width", width)
            //.attr("height", height)
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          labelM = chart.select('labelM');
        }


        // Scales.
        //var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);

        var x = d3.scale.ordinal().rangeRoundBands([0, width], 0)


        // X-axis.
        var xAxis = d3.svg.axis()
          .scale(x)
          .orient("bottom")

        // Date parsing.
        var parseDate = d3.time.format("%d/%m/%y");

        data.forEach(function(d) {
          if(!d.parsedDate){
            d.parsedDate = new Date(d.key);
          }
        });

        data = data.sort(function(a,b) {
          return d3.ascending(a.parsedDate, b.parsedDate)
        })


        x.domain(data.map(function(d) { return d.parsedDate; }))

        xAxis.tickValues([x.domain()[0], x.domain()[x.domain().length-1]])
          .tickFormat(d3.time.format('%b %y'))

        var yMax = d3.max(data, function(d){return d.value})
        y.domain([0, yMax]);


        // var xAxisDayNode = labelD
        //     .call(xAxisDay);

        // Draw bars.
        var bars = chart.selectAll(".day")
          .data(data);

        bars.transition().duration(100)
          .attr("x", function(d) { return x(d.parsedDate); })
          .attr("width", x.rangeBand()/2)
          .attr("y", function(d) { return y(d.value); })
          .attr("height", function(d) { return height - y(d.value);});

        bars.enter().append("rect")
          .attr("class", "day")
          //.attr("width", width / data.length)
          //.attr("x", function(d) {return x(d.parsedDate)})
          .attr("x", function(d) { return x(d.parsedDate); })
          .attr("width", x.rangeBand()/2)
          .attr("y", height)
          .attr("height", 0)
          .transition()
          .duration(100)
          .delay(function(d,i){return i*30})
          .attr("y", function(d) { return y(d.value); })
          .attr("height", function(d) { return height - y(d.value);});

        bars.exit().remove();

        var xAxisNode = labelM
          .call(xAxis);

        var brush = d3.svg.brush()
          .x(x)
          .on("brushend", brushended)


        var gBrush;

        if(chart.select('.brush').empty()){
          gBrush = chart.append("g")
            .attr("class", "brush")
            .call(brush)
            .call(brush.event);
        }else{
          gBrush = chart.select('.brush')
          //.call(brush)
          //.call(brush.event);
        }

        gBrush.selectAll("rect")
          .attr("height", height);
        //xAxisNode.selectAll('line').attr('y2', height-20);

        function brushended() {
          if (!d3.event.sourceEvent) return; // only transition after input
          if(brush.empty()){
            if(!fixed){
              brush.clear();
              extent = null;


              dispatch.brushed([x.domain()[0],x.domain()[x.domain().length-1]])
            }else{

              var b = brush.extent();
              var leftEdges = x.range();
              var width = x.rangeBand();
              var j;
              for(j=0; b[0] > (leftEdges[j] + width); j++) {};
              var ex1 = x(x.domain()[j]),
                ex2 = ex1 + width;

              var newExtent = [ex1,ex2]

             

              d3.select(this).transition()
                .call(brush.extent(newExtent))
                .call(brush.event);

              for(j=0; newExtent[0] + 1 > (leftEdges[j] + width); j++) {};
              var f1 = x.domain()[j];
              for(k=0; newExtent[1] > (leftEdges[k] + width); k++) {};
              var f2 = x.domain()[k];
              dispatch.brushed([f1,f2])

            }
          }else{

            var b = brush.extent();

            var leftEdges = x.range();


            var width = x.rangeBand();
            var j;
            for(j=0; b[0] > (leftEdges[j] + width); j++) {};
            var k;
            for(k=0; b[1] > (leftEdges[k] + width); k++) {};

            var ex1,
              ex2;
            if( b[0] > (x(x.domain()[j])+ width/2)){
              ex1=x(x.domain()[j+1]);
            }else{
              ex1=x(x.domain()[j]);
            }

            if(k == leftEdges.length) k--;

            if( b[1] < (x(x.domain()[k])+ width/2)){
              ex2=x(x.domain()[k-1])+width;

            }else{

              ex2=x(x.domain()[k])+width;

            }

            var newExtent = [ex1, ex2]

            if(ex2-ex1 > x.rangeBand() && fixed){
              newExtent = [ex1+x.rangeBand(), ex1+x.rangeBand()*2]
            }

            d3.select(this).transition()
              .call(brush.extent(newExtent))
              .call(brush.event);

            for(j=0; newExtent[0] + 1 > (leftEdges[j] + width); j++) {};
            var f1 = x.domain()[j];
            for(k=0; newExtent[1] > (leftEdges[k] + width); k++) {};
            var f2 = x.domain()[k];
            dispatch.brushed([f1,f2])

          }
        }

      }); //end selection
    } // end timeline



    timeline.chartWidth = function(x){
      if (!arguments.length) return chartWidth;
      chartWidth = x;
      return timeline;
    }

    timeline.chartHeight = function(x){
      if (!arguments.length) return chartHeight;
      chartHeight = x;
      return timeline;
    }

    timeline.events = function(x){
      if (!arguments.length) return events;
      events = x;
      return timeline;
    }

    timeline.extent = function(x){
      if (!arguments.length) return extent;
      extent = x;
      return timeline;
    }

    timeline.fixed = function(x){
      if (!arguments.length) return fixed;
      fixed = x;
      return timeline;
    }

    d3.rebind(timeline, dispatch, 'on');

    return timeline;

  }

})();
