import {createSlice} from "@reduxjs/toolkit";

const todoListSlice = createSlice({
  name: 'todoListSlice',
  initialState: {
    todos: []
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
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    changeStatus: (state, action) => {
      state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed
        }
      })
    }
  }
})

const todoListReducer = todoListSlice.reducer;

export const {addTodo, deleteTodo, changeStatus} = todoListSlice.actions;

export default todoListReducer;