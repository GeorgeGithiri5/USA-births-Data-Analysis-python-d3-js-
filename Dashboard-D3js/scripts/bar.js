var margin = { top: 50, right: 50, bottom: 50, left: 300 },
    width2 = 760 - margin.left - margin.right,
    height2 = 440 - margin.top - margin.bottom;

var svg2 = d3.select('#bar').append('svg')
    .attr('width', width2 + margin.left + margin.right)
    .attr('height', height2 + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    d3.csv('./Data/DataPerMonthTotals.csv',(data)=>{
        data.sort((b,a)=>{
            return a.births - b.births;
        })
        var x = d3.scaleBand()
                    .range([0,width2])
                    .domain(data.map((d)=>{return d.month}))
                    .padding(0.2)
                svg2.append('g')
                    .attr("transform", "translate(0, " + height2 + ")")
                    .call(d3.axisBottom(x))
                    .selectAll('text')
                        .attr("transform", "translate(-10,0)rotate(-45)")
                        .style('text-anchor',"end")
                        .attr('fill','white')

        var y = d3.scaleLinear()
                    .domain([0,6000000])
                    .range([height2,0])
                svg2.append('g')
                    .call(d3.axisLeft(y))
                    .selectAll('text')
                    .attr('fill','white')
                    
        svg2.selectAll('mybar')
            .data(data)
            .enter()
            .append('rect')
                .attr("x",(d)=>{return x(d.month)})
                .attr("y",(d)=>{return y(d.births)})
                .attr("width",x.bandwidth())
                .attr("height",(d)=>{return height2-y(d.births)})           
                .attr("fill","green")
            })
