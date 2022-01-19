import React from 'react';
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import SinglePostPage from "./pages/PostsPage/SinglePostPage/SinglePostPage";
import PostComments from "./components/PostComments/PostComments";
import SingleUserPage from "./pages/UsersPage/SingleUserPage/SingleUserPage";
import UserPosts from "./components/UserPosts/UserPosts";
import UserAlbums from "./components/UserAlbums/UserAlbums";
import AlbumPhotos from "./components/AlbumPhotos/AlbumPhotos";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'users'} element={<UsersPage/>}>
            <Route path={':userId'} element={<SingleUserPage/>}>
              <Route path={'posts'} element={<UserPosts/>} />
            </Route>
            <Route path={':userId/albums'} element={<UserAlbums/>}>
              <Route path={'photos'} element={<AlbumPhotos/>} />
            </Route>
          </Route>
          <Route path={'posts'} element={<PostsPage/>}>
            <Route path={':id'} element={<SinglePostPage/>}>
              <Route path={'comments'} element={<PostComments/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
