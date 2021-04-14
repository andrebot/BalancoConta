import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import HelloWorld from './pages/login.jsx';

render(
  <BrowserRouter>
    <div>
      <Route path='/' render={props => <div>Hello World</div>} />
    </div>
  </BrowserRouter>,
  document.getElementById('app')
);
