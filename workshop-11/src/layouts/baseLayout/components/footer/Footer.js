import React from 'react';
import { I18n } from 'react-redux-i18n';

import './style.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <div className='footer__content'>
          <a className='footer__logo' href='/'>{I18n.t('layout.footer.title')}</a>
        </div>
      </footer>
    );
  };
};
