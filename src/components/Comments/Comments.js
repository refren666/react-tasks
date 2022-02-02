import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comments.slice";
import {Comment} from "./Comment/Comment";

const Comments = () => {
  const {comments} = useSelector(state => state.commentReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllComments())
  }, [])

  return (
    <>
      <h1>Comments: </h1>
      {comments.map(
        comment => <Comment key={comment.id} comment={comment}/>
      )}
    </>
  );
};

export {Comments};