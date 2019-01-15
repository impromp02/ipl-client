import React, { Component, Fragment } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import Graph from '../../components/MatchChart/Graph';
import { matchMeta } from '../../utils/valueMap';

class MatchDash extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/api/season/' + this.props.match.params.seasonId + '/match/' + this.props.match.params.matchId)
    .then(res => res.json())
    .then(res => this.setState({
      data: res
    }))
    .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        {this.state.data.length === 0 ?
          <Spinner/> :
          <Fragment>
            <Graph data={this.state.data} meta={matchMeta}/>
          </Fragment> }
      </Fragment>
    );
  }
}

export default MatchDash;