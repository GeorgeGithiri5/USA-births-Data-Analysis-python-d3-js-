var margin = { top: 50, right: 50, bottom: 50, left: 50 },
    width3 = 660 - margin.left - margin.right,
    height3 = 440 - margin.top - margin.bottom;

var svg3 = d3.select('#density').append('svg')
    .attr('width', width3 + margin.left + margin.right)
    .attr('height', height3 + margin.top + margin.bottom)
  .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

d3.csv('./Data/2000BirthsData.csv',(data)=>{
    

});
