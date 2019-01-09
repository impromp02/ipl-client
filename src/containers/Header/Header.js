import React, { Fragment } from 'react';
import logo from '../../logo.png';
import styles from './Header.module.css';

const Header = ({showMenu}) => (
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
        <button onClick={showMenu}>Seasons</button>
        <button>Matches</button>
      </div>
    </div>
    <div className={styles.SubHeader}>

    </div>
  </Fragment>
  
);

export default Header;