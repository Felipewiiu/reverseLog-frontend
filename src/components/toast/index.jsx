import React from 'react';
import Styles from './toast.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as Check} from '../../assets/checkMine.svg';


Toast.propTypes = {
  font: PropTypes.string,
  active: PropTypes.bool
};

export default function Toast({ font , active}) {
  
  return (
    <div className={classNames({
      [Styles.container]:true,
      [Styles['container--active']]: active

    })} style={{ color: font }}>
      <Check/>
      <p>Atualizado com sucesso!</p>
    </div>
  );
}
