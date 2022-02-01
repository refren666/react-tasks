import {configureStore} from '@reduxjs/toolkit';

import carReducer from "./cars.slice";
import userReducer from "./users.slice";
import postReducer from "./posts.slice";
import commentReducer from "./comments.slice";

const store = configureStore({
  // кожна пропертя редюсера(слайс, для прикладу carReducer) - це окремий шматок загального стейту + його функції
  // слайси створюються під окремі сутності(юзери, пости, коментарі і т.д)
  reducer: {
    carReducer: carReducer,
    userReducer: userReducer,
    postReducer: postReducer,
    commentReducer: commentReducer
  }
})

export default store;