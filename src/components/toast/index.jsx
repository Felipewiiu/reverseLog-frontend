import React, { useEffect, useState } from 'react';
import Styles from './toast.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactComponent as Check } from '../../assets/checkMine.svg';

Toast.propTypes = {
  font: PropTypes.string,
  active: PropTypes.bool
};

export default function Toast({ font, active }) {
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
      style={{ color: font }}
    >
      <Check />
      <p>Atualizado com sucesso!</p>
    </div>
  );
}
