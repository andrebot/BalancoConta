import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { setUsername } from './actions.js';
import reducer from './reducer.js';
import './reset.styl';

import FormInput from '../../components/forms/input.jsx';
import Button from '../../components/button/button.jsx';

const page = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    username: '',
    usernameErrors: [],
  });
  const setUsernameAction = username => dispatch(setUsername(username));
  const backToLogin = () => {
    history.push('/');
  };

  return (
    <div className="reset-page">
      <div className="top-section">
        <span className="page-title">Reset Password</span>
      </div>
      <div className="bottom-section">
        <div className="reset-wrapper">
          <FormInput
            label="Email"
            name="username"
            errors={state.usernameErrors}
            value={state.username}
            setValue={setUsernameAction}
          >
            <span htmlFor="required">Please add your email</span>
          </FormInput>
          <Button style={{ marginBottom: 10, marginTop: 20 }}>Reset Password</Button>
          <Button style={{ marginBottom: 10 }} type={"type2"} action={backToLogin}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
