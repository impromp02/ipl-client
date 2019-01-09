import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashMenu.module.css';

const MENU_ITEMS = {
  season: 9,
  match: 60
};
const type = 'season';
const DashMenu = ({hideMenu}) => {
  let menuElements = [];
  for (let i=1; i<=MENU_ITEMS[type]; i++) {
    menuElements.push(<li key={type+i} onClick={hideMenu}><Link to={type + "/" + i}>{type + ' ' + i}</Link></li>);
  }

  return (
    <div className={styles.DashMenu}>
      <ul>
        {menuElements}
      </ul>
    </div>
  );
}

export default DashMenu;