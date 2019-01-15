import React, { Component, Fragment } from 'react';
import SeasonChart from '../../components/SeasonChart/SeasonChart';
import {seasonMeta} from '../../utils/valueMap';
import Spinner from '../../components/Spinner/Spinner';
import SeasonPie from '../../components/SeasonChart/SeasonPie';

class SeasonDash extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/season/'+ this.props.match.params.seasonId)
    .then(res => res.json())
    .then(res => this.setState({data: res}))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        {this.state.data.length === 0 ? <Spinner/> : 
        <Fragment>
          <SeasonChart meta={seasonMeta[0]} data={this.state.data[0]}/>
          <SeasonPie meta={seasonMeta[1]} data={this.state.data[1]}/>
          <SeasonPie meta={seasonMeta[2]} data={this.state.data[2]}/>
        </Fragment>
        }
      </Fragment>
    );
  }
}

export default SeasonDash;