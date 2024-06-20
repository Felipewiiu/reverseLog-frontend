import React from 'react';
import PropTypes from 'prop-types';
import Styles from './button.module.scss';

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  func: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string

};

export default function Button({ name, type, func, background, color }) {
  return (
    <button
      className={Styles.button}
      type={type}
      onClick={func}
      style={{ background: background, color: color }}
    >

      {name}
    </button>
  );
}
