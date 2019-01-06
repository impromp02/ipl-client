import * as d3 from 'd3';
import d3Tip from 'd3-tip';
import './helper.css';

/*let dataset = [
  {
  '_id': 9,
  'value': 14
  },
  {
  '_id': 5,
  'value': 118
  },
  {
  '_id': 2,
  'value': 139
  },
  {
  '_id': 3,
  'value': 131
  },
  {
  '_id': 10,
  'value': 46
  },
  {
  '_id': 6,
  'value': 133
  },
  {
  '_id': 11,
  'value': 62
  },
  {
  '_id': 12,
  'value': 14
  },
  {
  '_id': 7,
  'value': 140
  },
  {
  '_id': 4,
  'value': 134
  },
  {
  '_id': 8,
  'value': 75
  },
  {
  '_id': 13,
  'value': 16
  },
  {
  '_id': 1,
  'value': 132
  }
  ]; */

export const drawBarChart = (dataset, node) => {
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
      return "<strong>Matches:</strong> <span style='color:red'>" + d.value + "</span>";
    });

  let svg = d3.select(node)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  svg.call(tip);

  svg.append("text")
      .attr("class", "title")
      .attr('textLength', '40%')
      .attr('dx', '30%')
      .attr('dy', '-1rem')
      .attr('text-anchor', 'center')
      .text('Matches played in all seasons')

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
    .text('Matches');
  
  svg.selectAll('rect')
    .data(dataset)
  .enter().append('rect')
    .attr('class', 'bar')
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