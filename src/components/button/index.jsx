import React from 'react';
import PropTypes from 'prop-types';

Button.PropTypes = {
  value: PropTypes.string,
  type: PropTypes.string
};

export default function Button(value, type) {
  return (
    <button type={type}>
      {value}
    </button>
  );
}
