/**
 * Created by django on 21/03/16.
 */

(function(){

  var geomedia = window.geomedia || (window.geomedia = {});

  geomedia.pack = function(){

    var chartWidth = 200,
      chartHeight = 700,
      colors = ['#EFC9CC', '#EF4141']

    function pack(selection){
      selection.each(function(data){
        var margin = {top: 10, right: 12, bottom: 30, left: 12};

        var width = chartWidth - margin.left - margin.right,
          height = chartHeight - margin.top - margin.bottom;

        var chart,
          gradient;


        if (selection.select('svg').empty()){
          chart = selection.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + 0 + ")");

        }
        else
        {
          chart = selection.select('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .select('g')
            .attr("transform", "translate(" + margin.left + "," + 0 + ")");
        }




        var pack = d3.layout.pack()
          .size([width - 4, height - 4])
          .children(function(d){return d.values})
          .value(function(d) { return d.count})
          .padding(20);


        var ratioMax = d3.max(data,function(d){
          return d3.max(d.values,function(e){return e.ratio})
        });

        var countMax = d3.max(data,function(d){
          return d3.max(d.values,function(e){return e.count})
        });

        var colorScale = d3.scale.linear().range(colors).domain([0,ratioMax]);

        var nodes = pack.nodes({key:'root',values:data});

        var circs = chart//.datum(data)
          .selectAll("circle")
          .data(nodes, function(d){return d.key})

        var texts = chart
          .selectAll("text")
          //.datum(data.filter(function(d) { return !d.values && d.count >= countMax*1/4})).selectAll("text")
          .data(nodes.filter(function(d) { return !d.values && d.count >= countMax*1/4}), function(d){return d.key})

/*
          node.enter().append("g")
          .attr("class", function(d) { return d.parent ? d.values ? "node" : "node node--leaf" : "node node--root"; })

        node
          .transition().duration(500)
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
*/

        circs.enter().append("circle")
          .style("stroke", function(d) { return d.parent ? d.values ? "#CACACA" : 'none' : 'none' })
            .style("fill", function(d) { return d.parent ? d.values ? "#F9F9F9" : "#F9F9F9" : "none"; })
            .attr("r", 1)

        circs
          .transition().duration(500)
          .style("fill", function(d) { return d.parent ? d.values ? "#F9F9F9" : colorScale(d.ratio) : "none"; })
          .attr("r", function(d) { return d.r; })
          .attr("cy",function(d){return d.y})
          .attr("cx",function(d){return d.x})


        texts
          .enter().append("text")
          .attr("text-anchor", "middle")
          .attr("dy", "0.3em")
          .text(function(d) { return d.key})

          texts
          .transition().duration(500)
          .attr("x", function(d){return d.x})
          .attr("y", function(d){return d.y})

        circs
          .exit()
            .transition().duration(500)
            .attr("r", 0)
          .remove();

        texts
          .exit()
          .remove();





        function wrap(text, w) {
          text.each(function() {
            var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = [],
              lineNumber = 0,
              lineHeight = 1.1, // ems
              y = text.attr("y"),
              dy = 0.3;

              var tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
              line.push(word);
              tspan.text(line.join(" "));
              if (tspan.node().getComputedTextLength() > w) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
              }
            }
          });
        }

        function type(d) {
          d.value = +d.value;
          return d;
        }


      }); //end selection
    } // end pack


    pack.chartWidth = function(x){
      if (!arguments.length) return chartWidth;
      chartWidth = x;
      return pack;
    }

    pack.chartHeight = function(x){
      if (!arguments.length) return chartHeight;
      chartHeight = x;
      return pack;
    }

    return pack;
  }

})();
