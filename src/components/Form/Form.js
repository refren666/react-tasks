import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addTodo} from "../../store/todoList.slice";
import Todo from "../Todo/Todo";

const Form = () => {
  const dispatch = useDispatch();
  const {todos, todosCounter, completedTodosCounter} = useSelector(state => state.todoListReducer)
  const inputEl = useRef(null)


  const sendData = (e) => {
    e.preventDefault();
    const todoItem = inputEl.current.value;

    dispatch(addTodo({todoItem}))
    inputEl.current.value = '';
  }

  return (
    <>
      <h1>All: {todosCounter}</h1>
      <h1>Completed: {completedTodosCounter}</h1>
      <form onSubmit={sendData}>
        <input type="text" ref={inputEl}/>
        <button className={'button'}>Add</button>
      </form>

      <hr/>

      {todos.map(
          todo => <Todo key={todo.id} todo={todo}/>
      )}
    </>
  );
};

export default Form;