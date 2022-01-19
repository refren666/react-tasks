import React from 'react';
import {NavLink} from "react-router-dom";

const UserDetails = ({user}) => {
  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: {
        lat,
        lng
      }
    },
    phone,
    website,
    company: {
      name: companyName,
      catchPhrase,
      bs
    }
  } = user;

  return (
    <div>
      <div>
        <h2>Info about: #{id} {name}</h2>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Website: {website}</p>
        <p>Address: {city}, {street}, {suite}, {zipcode}</p>
        <p>Coordinates: lat: {lat}, lng: {lng}</p>
        <p>Company: {companyName}</p>
        <p>Company's catchphrase: {catchPhrase}</p>
        <p>Company's bs: {bs}</p>
      </div>
      <NavLink to={'posts'} state={{...user}}>
        <button>Get posts</button>
      </NavLink>
    </div>
  );
};

export default UserDetails;