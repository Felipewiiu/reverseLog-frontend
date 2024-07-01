import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Styles from './button.module.scss';

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  func: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  to: PropTypes.string

};

export default function Button({ name, type, func, background, color, to }) {
  return (
    <button
      className={Styles.button}
      type={type}
      onClick={func}
      style={{ background: background, color: color }}
    >
      <Link className={Styles.button__text} to={to} >
        {name}
      </Link>

    </button>
  );
}
