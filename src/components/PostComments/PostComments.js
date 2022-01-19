import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {postService} from "../../services/post.service";
import PostComment from "./PostComment/PostComment";

const PostComments = () => {
  const [comments, setComments] = useState([]);
  const {state: {id}} = useLocation();


  useEffect(() => {
    postService.getPostCommentsByPostId(id).then(commentsArr => setComments(commentsArr))
  }, [])

  return (
    <div>
      {comments.map(
        comment => <PostComment key={comment.id} commentInfo={comment}/>
      )}
    </div>
  );
};

export default PostComments;