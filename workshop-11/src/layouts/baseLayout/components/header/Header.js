import React from 'react';
import { I18n } from 'react-redux-i18n';

import './style.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='header__content'>
          <a className='header__logo' href='/'>{I18n.t('layout.header.title')}</a>
        </div>
      </header>
    );
  };
};
