import React from 'react';
import {useAuth} from "../../hooks/useAuth";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const {state: {pathname}} = useLocation();

  const submit = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    login(user, () => navigate(pathname, {replace: true}))
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <label><input type="text" name={'username'}/></label>
        <button>Login</button>
      </form>
    </div>
  );
};

export {LoginPage};