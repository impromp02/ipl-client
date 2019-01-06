import React, { Component, Fragment } from 'react';
import Header from './containers/Header/Header';
import DashView from './containers/DashView/DashView';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <DashView/>
      </Fragment>
    );
  }
}

export default App;
