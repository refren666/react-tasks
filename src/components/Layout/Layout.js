import React from 'react';
import {Link, Outlet} from "react-router-dom";

import classes from './Layout.module.css'

const Layout = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <Link to={'/'}>Home</Link>
        <Link to={'/cars'}>Cars</Link>
        <Link to={'/users'}>Users</Link>
        <Link to={'/posts'}>Posts</Link>
        <Link to={'/comments'}>Comments</Link>
      </nav>

      <Outlet/>
    </div>
  );
};

export {Layout};