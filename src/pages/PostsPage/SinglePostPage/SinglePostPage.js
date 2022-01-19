import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {postService} from "../../../services/post.service";
import PostDetails from "../../../components/PostDetails/PostDetails";

const SinglePostPage = () => {
  const [post, setPost] = useState(null);
  const {id} = useParams();
  const {state} = useLocation();

  useEffect(() => {
    if (state) {
      setPost(state);
      return;
    }

    postService.getById(id)
      .then(postObj => setPost(postObj))
  }, [id])


  return (
    <div>
      {post && <PostDetails post={post}/>}
    </div>
  );
};

export default SinglePostPage;