import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './pages/login/login.jsx';
import SignUp from './pages/signup/signup.jsx';
import './app.styl';

render(
  <BrowserRouter>
    <div className="pages">
      <Switch>
        <Route exact path="/">
          <HelloWorld />
        </Route>
        <Route path="/">
          <SignUp />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
