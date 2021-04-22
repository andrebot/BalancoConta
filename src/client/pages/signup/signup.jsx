import React, { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  doSignUp,
  setUsername,
  setPassword,
  setConfirmPassword,
} from './actions.js';
import reducer from './reducer.js';
import './signup.styl';

import FormInput from '../../components/forms/input.jsx';
import Button from '../../components/button/button.jsx';
import ProgressBar from '../../components/progressbar/progressbar.jsx';

const page = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
    confirmPassword: '',
    usernameErrors: [],
    passwordErrors: [],
    confirmPasswordErrors: [],
    isRegistering: false,
    hasRegistered: false,
  });
  const setUsernameAction = username => dispatch(setUsername(username));
  const setPasswordAction = password => dispatch(setPassword(password));
  const setConfirmPasswordAction = password => dispatch(setConfirmPassword(password));
  const startRegistration = () => dispatch(doSignUp());
  const backToLogin = () => history.push('/');

  useEffect(() => {
    if (state.isRegistering && !state.hasRegistered) {
      setTimeout(() => history.push('/'), 3000);
    }
  }, [state.isRegistering]);

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
            disabled={state.isRegistering}
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
            disabled={state.isRegistering}
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
            disabled={state.isRegistering}
          >
            <span htmlFor="required">Please confirm your password</span>
            <span htmlFor="notEqual">Not the same as your password</span>
          </FormInput>
          <Button
            style={{ marginBottom: 10, marginTop: 20 }}
            disabled={state.isRegistering}
            action={startRegistration}
          >
            Sign up
          </Button>
          <Button 
            style={{ marginBottom: 10 }}
            type={"type2"}
            action={backToLogin}
            disabled={state.isRegistering}
          >
            Cancel
          </Button>
          <div className={`bar-holder ${state.isRegistering ? 'loading' : ''}`}>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
