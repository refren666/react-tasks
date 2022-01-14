import React, {useEffect, useState} from 'react';

import User from "./User/User";
import {userService} from "../../services/user.service";
import UserInfo from "./UserInfo/UserInfo";
import Posts from "../Posts/Posts";
import {getUserPosts} from "../../services/post.service";
import classes from './Users.module.css'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    userService.getAll()
      .then(json => setUsers(json))
  }, [])

  const getUserId = (id) => {
    userService.getById(id)
      .then(json => setUser(json))
  }

  const getPosts = (userId) => {
    getUserPosts(userId)
      .then(posts => setPosts(posts.filter(post => post.userId === userId)))
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.usersBlock}>
        {users.map(
          user => <User
            key={user.id}
            user={user}
            getUserId={getUserId}
            getPosts={getPosts}
          />
        )}
      </div>

      <div className={classes.userInfoBlock}>
        {user && <UserInfo user={user} getPosts={getPosts}/>}
      </div>

      <div className={classes.postsBlock}>
        {posts.map(
          post => <Posts key={post.id} postInfo={post}/>
        )}
      </div>
    </div>
  );
};

export default Users;