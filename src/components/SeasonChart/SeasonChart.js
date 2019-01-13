import React, { Component } from 'react';
import { drawDualBarChart } from './SeasonChartHelper';
import styles from './SeasonChart.module.css';

class SeasonChart extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    drawDualBarChart(this.props.data, this.node.current, this.props.meta);
  }

  render() {
    return (
      <div className={styles.Chart} >
        <h2>{this.props.meta.title}</h2>
        <svg ref={this.node}></svg>
      </div>
    );
  }
}

export default SeasonChart;