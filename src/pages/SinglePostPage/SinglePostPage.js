import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";
import PostInfo from "../../components/PostInfo/PostInfo";

const SinglePostPage = () => {
  const params = useParams(); // доступаємся до динамічного URL
  const {id} = params;
  const [post, setPost] = useState(null);
  const {state} = useLocation();
  // useLocation() - хук, об'єкт якого має поля hash, key, pathname(відносний шлях), search(query param '?name=param') і state, який містить дані, що ми передали(є лиш коли передаєм щось)
  const navigate = useNavigate();
  // useNavigate() - хук, в якому navigate - функція, яка приймає один з параметрів(1-й - посилання куда перейти, або 2-й - число(додатнє, або від'ємне), щоб рухатись по історії)

  useEffect(() => {
    // альтернатива до АПІ, тут не робимо запиту на сервер, а передаєм дані
    if (state) {
      setPost(state)
      return
    }

    // лишаємо АПІ у разі, якщо хтось перейде по посиланню на цю сторінку
    postService.getById(id)
      .then(postObj => setPost(postObj))
  }, [id])

  const goHome = () => {
    // Увага! Посилання через хук useNavigate це погана практика, краще викор. Link, або NavLink!
    // Це можна вживати для примусового перенаправлення
    navigate('/', {replace: true}) // replace - очистить історію переходів(не можна буде перейти ні вперед ні назад)
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <button onClick={goHome}>Home</button>
      <button onClick={goBack}>Back</button>
      {post && <PostInfo post={post}/>}
    </div>
  );
};

export {SinglePostPage};