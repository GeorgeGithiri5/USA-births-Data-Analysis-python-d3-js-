var margin = { top: 50, right: 50, bottom: 50, left: 50 },
    width1 = 460 - margin.left - margin.right,
    height1 = 440 - margin.top - margin.bottom;

var svg1 = d3.select('#barh').append('svg')
    .attr('width', width1 + margin.left + margin.right)
    .attr('height', height1 + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    d3.csv('./Data/AllTotalsPerYear.csv',(data)=>{
        
        var x = d3.scaleLinear()
                    .domain([0,5000000])
                    .range([0,width1])
                svg1.append('g')
                    .call(d3.axisBottom(x))
                    .attr("transform", "translate(0, " + height1 + ")")
                    .attr("fill",'orange')
                    .selectAll('text')
                        .attr("transform", "translate(-10,0)rotate(-45)")
                        .style('text-anchor',"end")
                    .attr('fill','white')
        var y = d3.scaleBand()
                .domain(data.map(d=>{return d.year}))
                .range([height1,0])
                .padding(.3)
            svg1.append('g')
                .call(d3.axisLeft(y))
                .attr("fill",'orange')
                    .selectAll('text')
                    .attr('fill','white')

                    svg1.selectAll("myRect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("x", x(0) )
                    .attr("y", function(d) { return y(d.year); })
                    .attr("width", function(d) { return x(d.births); })
                    .attr("height", y.bandwidth() )
                    .attr("fill", "#69b3a2")

                    .on('mouseover',function(d,i){
                        console.log('hello')
                        d3.select(this)
                            .style("fill",'yellow')
                    })
                    .on('mouseout',function(d,i){
                        d3.select(this)
                            .transition()
                            .duration(50)
                            .style('fill',"#69b3a2")
                    })
    })
