import React, { useEffect, useState } from 'react';
import Styles from './toast.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactComponent as Check } from '../../assets/checkMine.svg';

Toast.propTypes = {
  background: PropTypes.string,
  active: PropTypes.bool,
  name: PropTypes.string
};

export default function Toast({ background, active, name }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [active]);

  return (
    <div
      className={classNames({
        [Styles.container]: true,
        [Styles['container--active']]: isVisible
      })}
      style={{ backgroundColor: background }}
    >
      <Check />
      <p>{name}</p>
    </div>
  );
}
