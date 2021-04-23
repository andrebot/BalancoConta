import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './pages/login/login.jsx';
import SignUp from './pages/signup/signup.jsx';
import ResetPassword from './pages/resetPassword/reset.jsx';
import TopBar from './components/topBar/topBar.jsx';
import './app.styl';

render(
  <BrowserRouter>
    <div className="pages">
      <Switch>
        <Route exact path="/">
          <HelloWorld />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route path="/main">
          <div className="pages">
            <Switch>
              <Route path="/main/dashboard">
                <TopBar />
              </Route>
            </Switch>
          </div>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
