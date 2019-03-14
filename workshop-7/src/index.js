import React from 'react';
import ReactDOM from 'react-dom';
import Base from './layouts/base/Base';
import FirstPage from './pages/firstPage/FirstPage';
import SecondPage from './pages/secondPage/SecondPage';
import ThirdPage from './pages/thirdPage/ThirdPage';

import './index.css';

ReactDOM.render(
  <Base>
    <FirstPage/>
  </Base>,
  document.getElementById('root')
);
