import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import todoListReducer, {changeStatus, deleteTodo} from "../../store/todoList.slice";
import css from "./Todo.module.css";

const Todo = ({todo}) => {
  const {todos} = useSelector(state => state['todoListReducer'])
  const dispatch = useDispatch();
  const completed = todos[0].completed;
  const classes = [];

  if (completed) {
    classes.push('done')
  }

  const deleteTodoItem = (id) => {
    dispatch(deleteTodo({id}))
  }

  const changeTodoStatus = (id) => {
    dispatch(changeStatus({id}))
    console.log(todos)
  }

  return (
    <div style={{display: 'flex'}}>
      <input onClick={() => changeTodoStatus(todo.id)} type="checkbox"/>
      <span className={classes.join(' ')}>
        {todo.todo}
      </span>
      <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
    </div>
  );
};

export default Todo;