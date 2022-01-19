import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import SinglePostPage from "./pages/PostsPage/SinglePostPage/SinglePostPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route path={'/users'} element={<UsersPage/>}/>
          <Route path={'/posts'} element={<PostsPage/>}>
            <Route path={'/posts/:id'} element={<SinglePostPage/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
