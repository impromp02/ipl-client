import React from 'react';
import logo from '../../logo.png';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.Header}>
    <div className={styles.Logo}>
      <img src={logo} alt="Logo"/>
    </div>
    <div className={styles.Baner}>
      <h1>IPL Stats</h1>
      <h4>Visualize the IPL</h4>
    </div>
    <div className={styles.Menu}>
      <button>Seasons</button>
      <button>Matches</button>
    </div>
  </div>
);

export default Header;