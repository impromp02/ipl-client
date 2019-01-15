import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './DashMenu.module.css';

const DashMenu = (props) => {
  let type = props.type === 'Seasons' ? 'season' : 'match';
  console.log(props.location)
  console.log(props.match);
  console.log(props.history);
  return (
    <Fragment>
      <div className={styles.DashMenu}>
        <ul>
          {menuItems(type, props.hideMenu, props.location.pathname)}
        </ul>
      </div>
      <div className={styles.Backdrop}></div>
    </Fragment>
    
  );
}

export default withRouter(DashMenu);

function menuItems(type, hideMenu, pathname) {
  let menuElements = [];
  if(type === 'season') {
    for(let i = 1; i<= 9; i++) {
      menuElements.push(
        <li key={type+i} onClick={hideMenu}>
          <Link to={`/${type}/${i}`}>{type + ' ' + i}</Link>
        </li>);
    }
  }
  
  if(type === 'match') {
    for (let i = 1; i <= 60; i++) {
      menuElements.push(
        <li key={type+i} onClick={hideMenu}>
          <Link to={`${pathname}/${type}/${i}`}>{type + ' ' + i}</Link>
        </li>);
    } 
  }
  
  return menuElements;
}