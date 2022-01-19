import React from 'react';

const PostComment = ({commentInfo}) => {
  const {postId, id, name, email, body} = commentInfo;

  return (
    <div>
      <h3>Comment #{id} to post #{postId}</h3>
      <h4><em>Name: {name}</em></h4>
      <p>Email: {email}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default PostComment;