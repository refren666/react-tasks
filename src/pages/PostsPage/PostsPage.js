import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import PostTitle from "../../components/PostTitle/PostTitle";
import {Outlet} from "react-router-dom";

import classes from './PostsPage.module.css'

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postService.getAll()
      .then(postsArr => setPosts(postsArr))
  }, [])

  return (
    <div className={classes.posts}>

      <div>
        <h2>Post title:</h2>
        {posts.map(
          post => <PostTitle key={post.id} postInfo={post}/>
        )}
      </div>

      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default PostsPage;