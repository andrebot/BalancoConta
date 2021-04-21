import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { setUsername, setPassword, setConfirmPassword } from './actions.js';
import reducer from './reducer.js';
import './signup.styl';

import FormInput from '../../components/forms/input.jsx';
import Button from '../../components/button/button.jsx';

const page = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
    confirmPassword: '',
    usernameErrors: [],
    passwordErrors: [],
    confirmPasswordErrors: [],
  });
  const setUsernameAction = username => dispatch(setUsername(username));
  const setPasswordAction = password => dispatch(setPassword(password));
  const setConfirmPasswordAction = password => dispatch(setConfirmPassword(password));
  const backToLogin = () => {
    history.push('/');
  };

  return (
    <div className="signup-page">
      <div className="top-section">
        <span className="page-title">Sign Up</span>
      </div>
      <div className="bottom-section">
        <div className="signup-wrapper">
          <FormInput
            label="Email"
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
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            errors={state.confirmPasswordErrors}
            value={state.confirmPassword}
            setValue={setConfirmPasswordAction}
          >
            <span htmlFor="required">Please confirm your password</span>
            <span htmlFor="notEqual">Not the same as your password</span>
          </FormInput>
          <Button style={{ marginBottom: 10, marginTop: 20 }}>Sign up</Button>
          <Button style={{ marginBottom: 10 }} type={"type2"} action={backToLogin}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
