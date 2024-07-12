import React, { useEffect, useState } from 'react';
import Styles from './toast.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ReactComponent as Check} from '../../assets/checkMine.svg';


Toast.propTypes = {
  font: PropTypes.string,
  active: PropTypes.bool
};

export default function Toast({ font , active}) {

  const [updateSucefull, setUpdateSucefull] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateSucefull(false);
    }, 3000);
  },[]);
 

  return (
    <div className={classNames({
      [Styles.container]:true,
      [Styles['container--active']]: updateSucefull

    })} style={{ color: font }}>
      <Check/>
      <p>Atualizado com sucesso!</p>
    </div>
  );
}
