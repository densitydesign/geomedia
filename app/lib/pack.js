/**
 * Created by django on 21/03/16.
 */

(function(){

  var geomedia = window.geomedia || (window.geomedia = {});

  geomedia.pack = function(){

    var chartWidth = 200,
      chartHeight = 700,
      colors = ['#EFC9CC', '#EF4141'],
        pad = 20,
      keyword="";

    function pack(selection){
      selection.each(function(data){
        var margin = {top: 30, right: 12, bottom: 30, left: 12};

        var tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return "<h5>"+ d.key+"</h5><p>articles <b class='red'>"+d.count+"</b></p><p>articles on "+keyword+" <b class='red'>"+(Math.round(d.count*d.ratio))+"</b></p><p>% of articles on "+keyword+" <b class='red'>"+(d.ratio*100).toFixed(2)+"%</b></p>" });


        var width = chartWidth - margin.left - margin.right,
          height = chartHeight - margin.top - margin.bottom;

        var chart,
          gradient;


        if (selection.select('svg').empty()){
          chart = selection.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        }
        else
        {
          chart = selection.select('svg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .select('g')
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        }


          selection.select("svg").call(tip);




        var pack = d3.layout.pack()
          .size([width - 4, height - 4])
          .children(function(d){return d.values})
          .value(function(d) { return d.count})
          .padding(pad);


        var ratioMax = d3.max(data,function(d){
          return d3.max(d.values,function(e){return e.ratio})
        });

        var countMax = d3.max(data,function(d){
          return d3.max(d.values,function(e){return e.count})
        });

        var colorScale = d3.scale.log().range(colors).clamp(true).nice().domain([0.001,ratioMax]);

        var nodes = pack.nodes({key:'root',values:data});

        var circs = chart//.datum(data)
          .selectAll("circle")
          .data(nodes, function(d){return d.key})

        var legs = chart//.datum(data)
          .selectAll("text.leg")
          .data(nodes.filter(function(d){return d.parent && d.values}), function(d){return d.key})


        var texts = chart
          .selectAll("text.ttip")

         // .data(nodes.filter(function(d) { return !d.values && d.count >= countMax*1/4}), function(d){return d.key})
            .data(nodes.filter(function(d) { return !d.values && d.r >=17}), function(d){return d.key})

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
            .filter(function(d){
                return "parent" in d && !("values" in d)
            })
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide);

        circs
          .transition().duration(500)
          .style("fill", function(d) {
              if(d.parent) {
                if(d.values) {
                  return "#F9F9F9"
                }
                else {
                  if(d.ratio == 0) return colors[0];
                  else return colorScale(d.ratio);
                }
              }
            else return "none"
             })
          .attr("r", function(d) { return d.r; })
          .attr("cy",function(d){return d.y})
          .attr("cx",function(d){return d.x})


        texts
          .enter().append("text")
          .attr("text-anchor", "middle")
          .attr("class","ttip")
          .attr("x",0)
          .attr("y",0)
            .style("font-size",9)
          .attr("dy", "0.3em")
            .style('opacity',0)
          .attr("transform",function(d) {return "translate("+d.x+","+d.y+")"})
          .each(addText)




        legs
          .enter().append("text")
          .attr("text-anchor", "middle")
          .attr("class","leg")
          .attr("x",0)
          .attr("y",0)
          .style("font-size",10)
          .style("fill","#999")
          .attr("dy", "0.3em")
          .style('opacity',0)
          .attr("transform",function(d) {
            var legx = Math.cos(getAngle(d.x, width/2, d.y, height/2))
            var legy = Math.sin(getAngle(d.x, width/2, d.y, height/2))
            return "translate("+(legx*(d.r+20) + d.x)+","+(legy*(d.r+20) + d.y)+")"})
          .text(function(d){return d.key});


          //.text(function(d) { return d.key})


        function getAngle(x1,x2,y1,y2) {

          return Math.atan2(y1 - y2, x1 - x2);
        }


        function addText(d) {
          var el = d3.select(this);
          var maxln = 15;

          function closest (num, arr) {
            var curr = arr[0]

            for(var val in arr) {
              if (Math.abs(num - arr[val]) < Math.abs(num - curr)) curr = arr[val]
            }

            return curr
          }

          if(d.key.length > maxln) {
            var indices = [];
            for(var i=0; i<d.key.length;i++) {
              if (d.key[i] === " ") indices.push(i);
            }

            el.append("tspan").attr("x",0).attr("text-anchor","middle").attr("dy",-2).text(d.key.substr(0,closest(d.key.length/2, indices)))
            el.append("tspan").attr("x",0).attr("text-anchor","middle").attr("dy",10).text(d.key.substr(closest(d.key.length/2, indices)))

          }
          else el.text(d.key);

        }


            texts
          .transition().duration(500)
              .attr("transform",function(d) {return "translate("+d.x+","+d.y+")"})
            .style('opacity',1)



        legs
          .transition().duration(500)
          .attr("transform",function(d) {
            var legx = Math.cos(getAngle(d.x, width/2, d.y, height/2))
            var legy = Math.sin(getAngle(d.x, width/2, d.y, height/2))
            return "translate("+(legx*(d.r+20) + d.x)+","+(legy*(d.r+20) + d.y)+")"})
          .style('opacity',1)

            //.attr("x", function(d){return d.x})
          //.attr("y", function(d){return d.y})


        texts
          .exit()
          .remove();


        legs
          .exit()
          .remove();


        circs
          .exit()
            .transition().duration(500)
            .attr("r", 0)
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

      pack.pad = function(x){
          if (!arguments.length) return pad;
          pad = x;
          return pack;
      }

    pack.keyword = function(x){
      if (!arguments.length) return keyword;
      keyword = x;
      return pack;
    }

    return pack;
  }

})();
