import React from 'react';
import {useDispatch} from "react-redux";

import {changeStatus, decreaseCompletedTodo, deleteTodo, increaseCompletedTodo} from "../../store/todoList.slice";
import classes from "./Todo.module.css";

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  const deleteTodoItem = (id) => {
    dispatch(deleteTodo({id}))
  }

  const changeTodoStatus = (id) => {
    dispatch(changeStatus({id}))
    console.log(todo)
  }

  return (
    <div className={classes.wrapper}>
      <input onChange={() => {
        changeTodoStatus(todo.id)
        todo.completed ? dispatch(decreaseCompletedTodo()) : dispatch(increaseCompletedTodo())
      }} type="checkbox"/>
      <span className={
        todo.completed ? classes.done : classes.unfinished
      }>
        {todo.todo}
      </span>
      <button className={'button'} onClick={() => {
        deleteTodoItem(todo.id)
        todo.completed && dispatch(decreaseCompletedTodo())
      }}>Delete</button>
    </div>
  );
};

export default Todo;