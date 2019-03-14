import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
        <nav className={'side-bar__nav-menu nav-menu'}>
          <ul className={'nav-menu__list'}>
            <li className={'nav-menu__item'}>
              Первая страница
            </li>
            <li className={'nav-menu__item'}>
              Вторая страница
            </li>
            <li className={'nav-menu__item'}>
              Третья страница
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
};

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};
