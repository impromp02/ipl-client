import React, { Component, Fragment } from 'react';
import Header from './containers/Header/Header';
import AllSeasonDash from './containers/DashView/AllSeasonDash';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <AllSeasonDash/>
      </Fragment>
    );
  }
}

export default App;
