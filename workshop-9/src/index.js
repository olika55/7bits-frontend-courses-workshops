import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import BaseLayout from './layouts/baseLayout/BaseLayout';
import Home from './pages/home/Home';

import store from './store/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BaseLayout>
      <Home/>
    </BaseLayout>
  </Provider>,
  document.getElementById('root')
);
