import {createSlice} from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: 'todoListSlice',
  initialState: {
    todos: [],
    todosCounter: 0,
    completedTodosCounter: 0
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(
        {
          id: Date.now(),
          todo: action.payload.todoItem,
          completed: false
        }
      )
      state.todosCounter += 1;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      state.todosCounter -= 1;
    },
    changeStatus: (state, action) => {
      state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed
        }
      })
    },
    increaseCompletedTodo: (state) => {
      state.completedTodosCounter += 1;
    },
    decreaseCompletedTodo: (state) => {
      state.completedTodosCounter -=1;
    }
  }
})

const todoListReducer = todoListSlice.reducer;

export const {addTodo, deleteTodo, changeStatus, increaseCompletedTodo, decreaseCompletedTodo} = todoListSlice.actions;

export default todoListReducer;