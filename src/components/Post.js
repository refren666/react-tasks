import React from 'react';

//      postsInfo = every particular post
const Post = ({postInfo}) => {
  const {id, title, body} = postInfo;
  return (
    <>
      <h2>Post #{id}</h2>
      <h2>Title: {title}</h2>
      <p>Body: {body}</p>
    </>
  );
};

export default Post;