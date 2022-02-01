import React from 'react';

const Post = ({post}) => {
  const {id, title, body} = post;

  return (
    <div>
      <h1>#{id} {title}</h1>
      <h3>Body: {body}</h3>
    </div>
  );
};

export default Post;