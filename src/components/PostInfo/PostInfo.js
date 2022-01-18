import React from 'react';

const PostInfo = ({post}) => {
  const {id, userId, title, body} = post;

  return (
    <div>
      <h3>Post #{id} {title}</h3>
      <p>From: User #{userId}</p>
      <p>Body: {body}</p>
    </div>
  );
};

export default PostInfo;