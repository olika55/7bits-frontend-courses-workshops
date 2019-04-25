import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Button extends React.Component {
  render() {
    const { value, className, type, disabled } = this.props;

    return (
      <button className={`button ${className}`} type={type} disabled={disabled}>
        {value}
      </button>
    );
  };
};

Button.defaultProps = {
  value: '',
  className: '',
  type: 'button',
  disabled: false
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool
};
