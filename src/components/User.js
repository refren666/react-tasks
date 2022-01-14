import React from 'react';

//      userInfo = every particular user
const User = ({userInfo}) => {
  const {id, name, username, email, address: {street,city}, phone, website, company: {name: companyName}} = userInfo;

  return (
    <>
      <h2>User №{id} {name}</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>Address: {street}, {city}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Company: {companyName}</p>
    </>
  );
};

export default User;