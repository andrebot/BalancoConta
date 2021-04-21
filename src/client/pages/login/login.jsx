import React, { useReducer } from 'react';
import { setUsername, setPassword } from './actions.js';
import reducer from './reducer.js';
import './login.styl';

import FormInput from '../../components/forms/input.jsx';
import Button from '../../components/button/button.jsx';

const page = () => {
  const [state, dispatch] = useReducer(reducer, {
    isDisty: false,
    username: '',
    password: '',
    usernameErrors: [],
    passwordErrors: [],
  });
  const setUsernameAction = username => dispatch(setUsername(username));
  const setPasswordAction = password => dispatch(setPassword(password));

  return (
    <div className="login-page">
      <div className="top-section"></div>
      <div className="bottom-section">
        <div className="login-wrapper">
          <div className="title">Login</div>
          <FormInput
            label="Username"
            name="username"
            errors={state.usernameErrors}
            value={state.username}
            setValue={setUsernameAction}
          >
            <span htmlFor="required">Please add your username</span>
          </FormInput>
          <FormInput
            label="Password"
            name="password"
            type="password"
            errors={state.passwordErrors}
            value={state.password}
            setValue={setPasswordAction}
          >
            <span htmlFor="required">Please add your password</span>
          </FormInput>
          <Button style={{
            marginBottom: 10,
          }}>Login</Button>
          <Button style={{
            marginBottom: 10,
          }} type={"type2"}>Reset password</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
