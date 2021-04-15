import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './pages/login.jsx';
import './app.styl';

render(
  <BrowserRouter>
    <div className="pages">
      <Switch>
        <Route path='/'>
          <HelloWorld />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
