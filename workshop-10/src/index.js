import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BaseLayout from './layouts/baseLayout/BaseLayout';
import PlainLayout from './layouts/plainLayout/PlainLayout';

import Home from './pages/home/Home';
import Login from "./pages/login/Login";

import store from './store/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/login' render={() => (
          <PlainLayout>
            <Route exact path='/login' component={Login} />
          </PlainLayout>
        )}/>
        <Route path='/' render={() => (
          <BaseLayout>
            <Route exact path='/' component={Home} />
          </BaseLayout>
        )}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
