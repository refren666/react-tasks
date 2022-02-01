import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../store/posts.slice";
import Post from "./Post/Post";

const Posts = () => {
  const {posts} = useSelector(state => state.postReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  return (
    <>
      <h1>Posts: </h1>
      {posts.map(
        post => <Post key={post.id} post={post}/>
      )}
    </>
  );
};

export default Posts;