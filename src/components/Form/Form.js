import React, {useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {addTodo} from "../../store/todoList.slice";
import Todo from "../Todo/Todo";

const Form = () => {
  const dispatch = useDispatch();
  const {todos} = useSelector(state => state.todoListReducer)
  const inputEl = useRef(null)

  const sendData = (e) => {
    e.preventDefault();
    const todoItem = inputEl.current.value;

    dispatch(addTodo({todoItem}))
    inputEl.current.value = '';
    // console.log(todos)
  }

  return (
    <>
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