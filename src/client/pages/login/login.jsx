import React, { useReducer, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { setUsername, setPassword, startLogin } from './actions.js';
import reducer from './reducer.js';
import './login.styl';

import FormInput from '../../components/forms/input.jsx';
import Button from '../../components/button/button.jsx';
import ProgressBar from '../../components/progressbar/progressbar.jsx';

import { useAuth } from '../../hooks/authContext.jsx';

const page = () => {
  const history = useHistory();
  const { setUser } = useAuth();
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    password: '',
    usernameErrors: [],
    passwordErrors: [],
    isLoggingIn: false,
    hasLoggedIn: false,
  });
  const setUsernameAction = username => dispatch(setUsername(username));
  const setPasswordAction = password => dispatch(setPassword(password));
  const startLoginAction = () => dispatch(startLogin());
  const goToResetPassword = () => {
    history.push('/resetpassword');
  };

  useEffect(() => {
    if (state.isLoggingIn && !state.hasLoggedIn) {
      setTimeout(() => {
        setUser({
          name: 'André',
          email: 'andre@gmail.com',
          level: 'admin',
          token: 'ksjhdfkjsh.akjsdhksdfhikauyhrkjahsidfuhkjh.akjshduysfgdahufsdgbukydfjgh',
        });
        history.push('/main/account-book');
      }, 1000);
    }
  }, [state.isLoggingIn]);

  return (
    <div className="login-page">
      <div className="top-section">
        <span className="page-title">Finanças</span>
      </div>
      <div className="bottom-section">
        <div className="container login-wrapper">
          <div className="title">Login</div>
          <FormInput
            label="Email"
            name="username"
            errors={state.usernameErrors}
            value={state.username}
            setValue={setUsernameAction}
            disabled={state.isLoggingIn}
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
            disabled={state.isLoggingIn}
          >
            <span htmlFor="required">Please add your password</span>
          </FormInput>
          <Button
            style={{ marginBottom: 10, marginTop: 20 }}
            disabled={state.isLoggingIn}
            action={startLoginAction}
          >
            Login
          </Button>
          <Button
            style={{ marginBottom: 10 }}
            type={"type2"}
            action={goToResetPassword}
            disabled={state.isLoggingIn}
          >
            Reset password
          </Button>
          <div className="new-account-link">
            <span>Need an account? <Link to="/signup">Sign up</Link></span>
          </div>
          <div className={`loading-bar ${state.isLoggingIn ? 'loading' : ''}`}>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
