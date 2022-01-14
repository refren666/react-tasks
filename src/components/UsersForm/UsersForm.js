import React, {useEffect, useState} from 'react';

import User from "../User/User";
import classes from "./UserForm.module.css"

const UsersForm = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({name: '', username: '', email: ''});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(jsonWithUsers => setUsers(jsonWithUsers))
  }, [])

  const formHandler = (e) => {
    const fieldName = e.target.name; // [] = for dynamic key
    const fieldValue = e.target.value;
    setForm({...form, [fieldName]: fieldValue});
    console.log(form)
  }

  const findUser = (e) => {
    e.preventDefault();
    setUsers(users.filter(
      user => user.name.includes(form.name) && user.username.includes(form.username) && user.email.includes(form.email)
    ))
  }

  return (
    <div>
      <form className={classes.form} onSubmit={findUser}>
        <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
        <label>Username: <input type="text" name={'username'} value={form.username} onChange={formHandler}/></label>
        <label>Email: <input type="text" name={'email'} value={form.email} onChange={formHandler}/></label>
        <button className={classes.button}>Find</button>
      </form>

      {users.map(
        user => <User key={user.id} userInfo={user}/>
      )}
    </div>
  );
};

export default UsersForm;