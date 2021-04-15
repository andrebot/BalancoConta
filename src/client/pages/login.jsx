import React from 'react';
import './login.styl';

import FormInput from '../components/forms/input.jsx';

const page = () => {
  return (
    <div className="login-page">
      <div className="top-section"></div>
      <div className="bottom-section">
        <div className="login-wrapper">
          <div>Login</div>
          <FormInput label="Username" name="username" />
          <FormInput label="Password" name="password" type="password"/>
          <button>Login</button>
          <button>Forgot password</button>
        </div>
      </div>
    </div>
  );
};

export default page;
