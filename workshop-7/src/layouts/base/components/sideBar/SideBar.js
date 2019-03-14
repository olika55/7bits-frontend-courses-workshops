import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.css';

export default class SideBar extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <aside className={`side-bar${className ? ` ${className}` : ''}`}>
        <nav className={'side-bar__nav-menu nav-menu'}>
          <ul className={'nav-menu__list'}>
            <li className={'nav-menu__item'}>
              <NavLink
                exact
                to={'/'}
                className={'nav-menu__link'}
                activeClassName={'nav-menu__link_active'}
              >
                Первая страница
              </NavLink>
            </li>
            <li className={'nav-menu__item'}>
              <NavLink
                to={'/second'}
                className={'nav-menu__link'}
                activeClassName={'nav-menu__link_active'}
              >
                Вторая страница
              </NavLink>
            </li>
            <li className={'nav-menu__item'}>
              <NavLink
                to={'/third'}
                className={'nav-menu__link'}
                activeClassName={'nav-menu__link_active'}
              >
                Третья страница
              </NavLink>
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
