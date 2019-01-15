import React, { Fragment } from 'react';
import logo from '../../logo.png';
import styles from './Header.module.css';
import {withRouter} from 'react-router-dom';

const Header = (props) => (
  <Fragment>
    <div className={styles.Header}>
      <div className={styles.Logo}>
        <img src={logo} alt="Logo"/>
      </div>
      <div className={styles.Baner}>
        <h1>IPL Stats</h1>
        <h4>Visualize the IPL</h4>
      </div>
      <div className={styles.Menu}>
        <button onClick={props.showMenu}>Seasons</button>
        <button>Matches</button>
      </div>
    </div>
    <div className={styles.SubHeader}>
      Statistics for <span>{mapRoute(props.location.pathname)}</span>
    </div>
  </Fragment>
  
);

export default withRouter(Header);

function mapRoute(pathname) {
  const seasonRegEx = /\/season\/[1-9]/;
  const matchRegEx = /\/season\/[1-9]\/match\/[1-9]/;
  if(pathname === '/') {
    return 'All Seasons';
  } else if(matchRegEx.test(pathname)) {
    return 'Match ' +  pathname.slice(-1)
  } else if(seasonRegEx.test(pathname)) {
    return 'Season ' + pathname.slice(-1)
  } else {
    return 'Unknown';
  }
}