import React from 'react';

const UserPost = ({postInfo}) => {
  const {userId, id, title, body} = postInfo;

  return (
    <div>
      <h3>Post #{id} from user #{userId}</h3>
      <h4>Title: {title}</h4>
      <p>Body: {body}</p>
    </div>
  );
};

export default UserPost;