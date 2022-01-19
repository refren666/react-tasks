import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserName from "../../components/UserName/UserName";
import classes from './UsersPage.module.css'

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(usersArr => setUsers(usersArr))
  }, [])

  return (
    <div className={classes.wrapper}>
      <div>
        <h2>Users:</h2>
        {users.map(
          user => <UserName key={user.id} userInfo={user}/>
        )}
      </div>

      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default UsersPage;