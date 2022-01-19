import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './UserAlbum.module.css'

const UserAlbum = ({albumInfo}) => {
  const {userId, id, title} = albumInfo;

  return (
    <div>
      <h3>Album #{id} of user #{userId}</h3>
      <h4>Title: {title}</h4>
      <NavLink to={'photos'} state={{...albumInfo}}>
        <button className={classes.photosBtn}>Photos</button>
      </NavLink>
    </div>
  );
};

export default UserAlbum;