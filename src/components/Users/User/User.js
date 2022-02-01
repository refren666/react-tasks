import React from 'react';

const User = ({user}) => {
  const {id, name, username, email} = user;

  return (
    <div>
      <h1>#{id} {name}</h1>
      <h3>Username: {username}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
};

export default User;