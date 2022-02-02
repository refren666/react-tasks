import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import todoListReducer, {changeStatus, deleteTodo} from "../../store/todoList.slice";
import classes from "./Todo.module.css";

const Todo = ({todo}) => {
  const {todos} = useSelector(state => state['todoListReducer'])
  const dispatch = useDispatch();

  const deleteTodoItem = (id) => {
    dispatch(deleteTodo({id}))
  }

  const changeTodoStatus = (id) => {
    dispatch(changeStatus({id}))
    console.log(todos)
  }

  return (
    <div className={classes.wrapper}>
      <input onChange={() => changeTodoStatus(todo.id)} type="checkbox"/>
      <span className={
        todo.completed ? classes.done : classes.unfinished
      }>
        {todo.todo}
      </span>
      <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;