import React from 'react';
import {NavLink, Outlet, useNavigate} from "react-router-dom";

import classes from './Layout.module.css';
import {useAuth} from "../../hooks/useAuth";

const Layout = () => {
  const {logout} = useAuth();
  const navigate = useNavigate();

  const logOut = () => {
    logout(() => navigate('/', {replace: true}))
  }

  return (
    <>
      <div className={classes.navbar}>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/users"}>USERS</NavLink>
        <NavLink to={"/posts"}>POSTS</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
        <button onClick={logOut}>Logout</button>
      </div>

      <div className={classes.mainContent}>
        {/* Outlet - child route */}
        <Outlet/>
      </div>

      <div className={classes.footer}>
        @Copyright
      </div>
    </>
  );
};

export default Layout;