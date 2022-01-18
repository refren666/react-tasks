import React from 'react';
import {Link} from "react-router-dom";

import classes from './PostTitle.module.css';

const PostTitle = ({postInfo}) => {
  const {id, title} = postInfo;

  return (
    <div>
      <Link className={classes.link} to={id.toString()} state={postInfo}><i>Title: {title}</i></Link>
    </div>
  );
};

export default PostTitle;