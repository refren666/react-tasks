import React from 'react';

//      commentInfo = every particular post
const Comment = ({commentInfo}) => {

  const {id, name, email, body} = commentInfo;

  return (
    <>
      <h2>Comment #{id}</h2>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
    </>
  );
};

export default Comment;