import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/users.slice";
import User from "./User/User";

const Users = () => {
  const {users} = useSelector(state => state.userReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <>
      <h1>Users: </h1>
      {users.map(
        user => <User key={user.id} user={user}/>
      )}
    </>
  );
};

export default Users;