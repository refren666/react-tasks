import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserPost from "./UserPost/UserPost";

const UserPosts = () => {
  const [posts, setPosts] = useState([]);
  const {state: {id}} = useLocation(); // extracting id from url

  useEffect(() => {
    userService
      .getPostsByUserId(id)
      .then(postsArr => setPosts(postsArr))
  }, [])

  return (
    <div>
      {posts.map(
        post => <UserPost key={post.id} postInfo={post} />
      )}
    </div>
  );
};

export default UserPosts;