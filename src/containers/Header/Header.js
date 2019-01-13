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
  switch(pathname) {
    case '/': return 'All Seasons';
    default: return 'Season ' + pathname.slice(-1);
  }
}