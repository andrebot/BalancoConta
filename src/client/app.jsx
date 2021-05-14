import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './hooks/authContext.jsx';
import Login from './pages/login/login.jsx';
import SignUp from './pages/signup/signup.jsx';
import ResetPassword from './pages/resetPassword/reset.jsx';
import TopBar from './components/topBar/topBar.jsx';
import AcctPage from './pages/accountPage/accountPage.jsx';
import './app.styl';

render(
  <BrowserRouter>
    <AuthProvider>
      <div className="pages">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route path="/main">
            <div className="pages">
              <TopBar />
              <Switch>
                <Route path="/main/account-book">
                  <AcctPage />
                </Route>
              </Switch>
            </div>
          </Route>
        </Switch>
      </div>
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById('app')
);
