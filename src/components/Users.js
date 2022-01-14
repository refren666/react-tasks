import React, {useEffect, useState} from 'react';

import User from "./User";

const Users = () => {

  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(value => setUsers(value))
  }, [])

  return (
    <div className='users'>
      {users.map(
        user => <User key={user.id} userInfo={user}/>
      )}
    </div>
  );
};

export default Users;