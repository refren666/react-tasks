import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

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
      <div>
        {post && <PostDetails post={post}/>}
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default SinglePostPage;