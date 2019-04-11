import React from 'react';

import './style.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__content'>
          <a className='footer__logo' href='/'>Подвал</a>
        </div>
      </footer>
    );
  };
};
