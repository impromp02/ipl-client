import React, { Component } from 'react';
import { drawPieChart } from './SeasonChartHelper';
import styles from './SeasonPie.module.css';

class SeasonPie extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    drawPieChart(this.props.data, this.node.current, this.props.meta);
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

export default SeasonPie;