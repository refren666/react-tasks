import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.navbar}>
      <NavLink to={'/users'}>Users</NavLink>
      <NavLink to={'/posts'}>Posts</NavLink>
    </div>
  );
};

export default Header;