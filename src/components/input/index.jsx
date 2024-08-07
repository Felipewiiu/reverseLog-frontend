import React from 'react';
import Styles from './input.module.scss';
import PropTypes from 'prop-types';

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  change: PropTypes.func.isRequired,
  value: PropTypes.string,
  valueWidh: PropTypes.string,
  borderRadiusValue: PropTypes.string,
  marginBotton: PropTypes.string,
  bottom: PropTypes.string
};

export default function Input({ type, label, placeholder, change, value, valueWidh, borderRadiusValue, marginBotton, bottom }) {
  return (
    <div className={Styles.container}>
      <label htmlFor="input" style={{marginBottom: bottom}}>
        {label}
      </label>
      <input
        id='input'
        type={type}
        placeholder={placeholder}
        onChange={event => change(event.target.value)}
        className={Styles.input}
        value={value}
        style={{width: valueWidh, borderRadius: borderRadiusValue, marginBottom: marginBotton}}

      />
    </div>

  );
 

}
