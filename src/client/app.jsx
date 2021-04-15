import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HelloWorld from './pages/login.jsx';

render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path='/'>
          <HelloWorld />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
