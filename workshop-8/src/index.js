import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayout from './layouts/baseLayout/BaseLayout';
import Home from './pages/home/Home';

import './index.css';

ReactDOM.render(
  <BaseLayout>
    <Home/>
  </BaseLayout>,
  document.getElementById('root')
);
