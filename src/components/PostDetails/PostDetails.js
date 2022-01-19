import React from 'react';
import {NavLink} from "react-router-dom";

const PostDetails = ({post}) => {
  const {userId, id, title, body} = post;

  return (
    <div>
      <h3>Post #{id} from user #{userId}</h3>
      <h3><em>Title: {title}</em></h3>
      <p>Body: {body}</p>
      <NavLink to={'/'}>
        <button>Show comments</button>
      </NavLink>
    </div>
  );
};

export default PostDetails;