import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './containers/Header/Header';
import AllSeasonDash from './containers/DashView/AllSeasonDash';
import SeasonDash from './containers/DashView/SeasonDash';
import NotFound from './components/NotFound/NotFound';
import DashMenu from './components/DashMenu/DashMenu';
import MatchDash from './containers/DashView/MatchDash';

class App extends Component {
  state = {
    dashMenu: false
  };

  showDashMenu = () => {
    this.setState({
      dashMenu: true
    });
  };

  hideDashMenu = () => {
    this.setState({
      dashMenu: false
    });
  };

  render() {
    return (
      <Fragment>
        <Header showMenu={this.showDashMenu}/>
        {this.state.dashMenu ? <DashMenu hideMenu={this.hideDashMenu}/> : null}
        <Switch>
          <Route exact path='/' component={AllSeasonDash}/>
          <Route path='/season/:seasonId/match/:matchId' component={MatchDash}/>
          <Route path='/season/:seasonId' component={SeasonDash}/>
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
