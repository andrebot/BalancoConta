import React, { useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { sendResetEmail, setEmail, emailSent } from './actions.js';
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
  const backToLogin = () => history.push('/');

  useEffect(() => {
    if (state.isSendingEmail && !state.emailHasBeenSent) {
      setTimeout(() => dispatch(emailSent()), 3000);
    }
  }, [state.isSendingEmail]);

  return (
    <div className="reset-page">
      <div className="top-section">
        <span className="page-title">Reset Password</span>
      </div>
      <div className="bottom-section">
        <div className="reset-wrapper">
          <div className={`reset-input-wrapper ${state.emailHasBeenSent ? 'sent' : ''}`}>
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
          </div>
          <div className={`email-sent ${state.emailHasBeenSent ? 'sent' : ''}`}>
            <span>An email with a new password was sent to your email. Use it to reset your password</span>
          </div>
          <div className={`reset-buttons ${state.emailHasBeenSent ? 'sent' : ''}`}>
            <Button style={{ marginBottom: 10, marginTop: 20 }} action={resetEmail} disabled={state.isSendingEmail}>
              Reset Password
            </Button>
            <Button style={{ marginBottom: 10 }} type={"type2"} action={backToLogin} disabled={state.isSendingEmail}>
              Cancel
            </Button>
          </div>
          <div className={`ok-button ${state.emailHasBeenSent ? 'sent' : ''}`}>
            <Button style={{ marginBottom: 10, marginTop: 20 }} action={backToLogin}>
              OK
            </Button>
          </div>
          <div className={`bar-holder ${state.isSendingEmail ? 'loading' : ''}`}>
            <ProgressBar />
          </div>
          <div className={`reset-error ${state.hasErrorFromServer ? 'has-error' : ''}`}>
            <span>{state.errorFromServer}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
