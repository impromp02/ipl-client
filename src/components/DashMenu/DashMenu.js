import React from 'react';
import styles from './DashMenu.module.css';

const MENU_ITEMS = {
  season: 9,
  match: 60
};

const DashMenu = ({type}) => {
  let menuElements = [];
  for (let i=1; i<=MENU_ITEMS[type]; i++) {
    menuElements.push(<li key={type+i}>{type + ' ' + i}</li>);
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