import React, { useState, useReducer } from 'react';
import './login.styl';

import FormInput from '../components/forms/input.jsx';

const page = () => {
  const [usernameErrors, setUsernameErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'password':
        if (!action.password) {
          setPasswordErrors(['required']);
        } else {
          setPasswordErrors([]);
          return { ...state, password: action.password };
        }
        break;
      case 'username':
        if (!action.username) {
          setUsernameErrors(['required']);
        } else {
          setUsernameErrors([]);
          return { ...state, username: action.username };
        }
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
  });
  const setUsernameAction = username => dispatch({ type: 'username', username });
  const setPasswordAction = password => dispatch({ type: 'password', password });

  return (
    <div className="login-page">
      <div className="top-section"></div>
      <div className="bottom-section">
        <div className="login-wrapper">
          <div>Login</div>
          <FormInput label="Username" name="username" errors={usernameErrors} value={state.username} setValue={setUsernameAction}>
            <span htmlFor="required">Please add your username</span>
          </FormInput>
          <FormInput label="Password" name="password" type="password" errors={passwordErrors} value={state.password} setValue={setPasswordAction}>
            <span htmlFor="required">Please add your password</span>
          </FormInput>
          <button>Login</button>
          <button>Forgot password</button>
        </div>
      </div>
    </div>
  );
};

export default page;
