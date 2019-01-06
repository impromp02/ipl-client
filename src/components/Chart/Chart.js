import React, { Component } from 'react';
import { drawBarChart } from '../../utils/helper';
import styles from './Chart.module.css';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  componentDidMount() {
    drawBarChart(this.props.data, this.node.current);
  }

  render() {
    return (
      <svg className={styles.Chart} ref={this.node}>

      </svg>
    );
  }
}

export default Chart;