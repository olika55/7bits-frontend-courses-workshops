import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Base from './layouts/base/Base';
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Base>
      <Route exact path='/' component={FirstPage}/>
      <Route path='/second' component={SecondPage}/>
      <Route path='/third' component={ThirdPage}/>
    </Base>
  </BrowserRouter>,
  document.getElementById('root')
);
