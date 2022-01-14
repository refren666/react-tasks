import React from 'react';

import classes from './User.module.css'

const User = ({userInfo}) => {
  const {id, name, username, email} = userInfo;
  return (
    <div className={classes.userBlock}>
      <h3>{id} {name} {username}--{email}</h3>
    </div>
  );
};

export default User;