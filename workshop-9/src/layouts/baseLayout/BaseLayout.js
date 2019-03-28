import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './style.css';

export default class BaseLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className='content'>
          {this.props.children}
        </main>
        <Footer />
      </React.Fragment>
    );
  };
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired
};
