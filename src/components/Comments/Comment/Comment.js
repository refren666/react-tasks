import React from 'react';

const Comment = ({comment}) => {
  const {id, name, email, body} = comment;

  return (
    <div>
      <h1>#{id} {name}</h1>
      <h3>Email: {email}</h3>
      <h3>Body: {body}</h3>
    </div>
  );
};

export default Comment;