import React, {useEffect, useState} from 'react';

import Comment from "./Comment";

const Comments = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(value => setComments(value));
  }, [])

  return (
    <div className='comments'>
      {comments.map(
        comment => <Comment key={comment.id} commentInfo={comment}/>
      )}
    </div>
  );
};

export default Comments;