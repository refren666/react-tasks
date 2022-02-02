import {configureStore} from "@reduxjs/toolkit";

import todoListReducer from "./todoList.slice";

const store = configureStore({
  reducer: {
    todoListReducer
  }
})

export default store;