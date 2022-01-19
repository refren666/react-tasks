import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './UserName.module.css'

const UserName = ({userInfo}) => {
  const {id, name} = userInfo;

  return (
    <div className={classes.userBlock}>
      <NavLink className={classes.userName} to={id.toString()} state={{...userInfo}}>
        <i>#{id} - {name}</i>
      </NavLink>

      <NavLink to={`${id.toString()}/albums`} state={{...userInfo}}>
        <button className={classes.albumButton}>Albums</button>
      </NavLink>
    </div>
  );
};

export default UserName;