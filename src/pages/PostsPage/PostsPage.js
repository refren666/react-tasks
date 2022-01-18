import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import PostTitle from "../../components/PostTitle/PostTitle";
import classes from './PostsPage.module.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useSearchParams();
  // хук useSearchParams нагадує useState, але працює з квері параметрами (?name=parameter). Змінна (query) тут є функцією, яка обробляє ОБ'ЄКТ!

  useEffect(() => {
    postService.getAll()
      .then(postsArr => {
        const title = query.get('title'); // query: ?title=value; і ми дістаємо це value
        let filter = [...postsArr]
        // якщо є ця query, то фільтруєм пости, в яких назва містить те, що ми ввели в пошук
        if (title) {
          filter = postsArr.filter(post => post.title.includes(title))
        }

        setPosts(filter)
      })
  }, [query])

  const submit = (e) => {
    // при натисканні на кнопку, добавляє квері в урлу
    e.preventDefault();
    setQuery({title: e.target.search.value}) // P.A!!! url + ?title=input value
  }

  return (
    <div className={classes.wrapper}>
      <div>
        <form onSubmit={submit}>
          <input type="search" name={'search'}/>
          <button>Search</button>
        </form>
        <h2>Posts:</h2>
        {posts.map(
          post => <PostTitle key={post.id} postInfo={post}/>
        )}
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export {PostsPage};