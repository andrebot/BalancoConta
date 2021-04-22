import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { sendResetEmail, setEmail } from './actions.js';
import reducer from './reducer.js';
import './reset.styl';

import FormInput from '../../components/forms/input.jsx';
import Button from '../../components/button/button.jsx';
import ProgressBar from '../../components/progressbar/progressbar.jsx';

const page = () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    emailErrors: [],
    serverErrorMsg: '',
    isSendingEmail: false,
    emailHasBeenSent: false,
    hasErrorFromServer: false,
  });
  const resetEmail = email => dispatch(sendResetEmail(email));
  const setEmailAction = email => dispatch(setEmail(email));
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
            errors={state.emailErrors}
            value={state.email}
            setValue={setEmailAction}
            disabled={state.isSendingEmail}
          >
            <span htmlFor="required">Please add your email</span>
          </FormInput>
          <Button style={{ marginBottom: 10, marginTop: 20 }} action={resetEmail}>
            Reset Password
          </Button>
          <Button style={{ marginBottom: 10 }} type={"type2"} action={backToLogin}>
            Cancel
          </Button>
          <div className={`bar-holder ${state.isSendingEmail ? 'loading' : ''}`}>
            <ProgressBar />
          </div>
          <div className={`error-message ${state.hasErrorFromServer ? 'has-error' : ''}`}>
            <span>{state.errorFromServer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
