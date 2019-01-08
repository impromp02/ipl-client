import React, { Component, Fragment } from 'react';
import AllSeasonChart from '../../components/Charts/AllSeasonChart';
import { seasonMeta } from '../../components/valueMap';

class AllSeasonDash extends Component {
  state = {
    data: []
  };

  fetchData = () => {
    return fetch('http://localhost:8080/api/season')
      .then(res => res.json())
      .then(res => this.setState({data: res}))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Fragment>
        {this.state.data.map((array, i) => <AllSeasonChart key={i} meta={seasonMeta[i]} data={array} />)}
      </Fragment>
    );
  }
}

export default AllSeasonDash;