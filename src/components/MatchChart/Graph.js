import React, { Component } from 'react';
import { dualBarChart } from './ChartHelper';
import styles from './MatchChart.module.css';

class Graph extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    dualBarChart(this.props.data, this.node.current, this.props.meta);
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
export default Graph;