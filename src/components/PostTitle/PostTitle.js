import React from 'react';
import {NavLink} from "react-router-dom";

import classes from './PostTitle.module.css'

const PostTitle = ({postInfo}) => {
  const {id, title} = postInfo;

  return (
    <div className={classes.postLink}>
      <NavLink
        to={id.toString()}
        state={postInfo}>
        <i>#{id} {title}</i>
      </NavLink>
    </div>
  );
};

export default PostTitle;