import React, { Component } from 'react';
import Chart from '../../components/Chart/Chart';

class DashView extends Component {
  state = {
    data: []
  };

  fetchData = () => {
    return fetch('http://localhost:8080/api/season')
      .then(res => res.json())
      .then(res => this.setState({data: res}));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div id="infoViz">
        {this.state.data.map((array, i) => <Chart data={array} />)}
      </div>
    );
  }
}

export default DashView;