import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import { teamNames } from '../../utils/valueMap';
import './d3Helper.css';
import '../../utils/teamColors.css';

export const drawBarChart = (dataset, node, meta) => { 
  const margin = {
    top: 40,
    right: 20,
    bottom: 30,
    left: 40
  };
  
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.right;

  const xScale = d3.scaleBand()
                  .domain(dataset.map(d => d._id))
                  .rangeRound([0, width])
                  .paddingInner(0.3);

  const yScale = d3.scaleLinear()
                  .domain([0, d3.max(dataset, d => d.value)])
                  .range([height, 0]);
          
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  const tip = d3Tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {
      return "<strong>" + meta.label + ":</strong> <span style='color:red'>" + d.value + "</span>";
    });

  let svg = d3.select(node)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg.call(tip);

  svg.append('g')
    .attr('class', 'x axis')
    .attr('transform', 'translate(0,' + height + ')')
    .call(xAxis);
  
  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
  .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '.71em')
    .attr('fill', 'black')
    .style('text-anchor', 'end')
    .text(meta.label);
  
  svg.selectAll('rect')
    .data(dataset, function(d) {return d._id})
  .enter().append('rect')
    .attr('class', function(d) {
      if(meta.label === 'Matches') {
        return teamNames[d._id];
      } else {
        return 'bar';
      }
      
    })
    .attr('x', function(d) {
      return xScale(d._id);
    })
    .attr('width', xScale.bandwidth)
    .attr('y', function(d) {
      return yScale(d.value);
    })
    .attr("height", function(d) { return height - yScale(d.value); })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);
};