import React from 'react';

const Posts = ({postInfo}) => {
  const {userId, id, title, body} = postInfo;

  return (
    <div>
      <h2>Post #{id} from user #{userId}</h2>
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
    </div>
  );
};

export default Posts;