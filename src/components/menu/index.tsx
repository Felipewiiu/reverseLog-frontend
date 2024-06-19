import routesMenu from './routesMenu.json';
import styles from './Menu.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as Hamburguer } from 'components/menu/image/hamburguer.svg';
import { ReactComponent as Light } from 'components/menu/image/light_mode.svg';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Moon } from './image/moon.svg';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';

interface Iprops {
  toggleTheme: () => void
  theme: string;
}

export default function Menu({ toggleTheme }: Iprops) {

  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);
  const [mode, setMode] = useState(false);


  const handleMenuState = () => {
    setMenuState(!menuState);

  };

  const changeMode = () => {
    setMode(!mode);
    toggleTheme();

  };

  const changeIcon = () => {

    if (mode) {
      return (
        <>
          <div className={styles.Mode__container}>
            <Light />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.Mode__container}>
            <Moon />
          </div>

        </>
      );
    }
  };


  return (
    <div className={classNames({
      [styles.container]: true,
      [styles['container--dark']]: theme === 'dark' ? true : false
    })}>
      <nav className={classNames({
        [styles.container__nav]: true,
        [styles['container--dark']]: theme === 'dark' ? true : false,
      })}>

        <ul className={styles.container__list}>
          {routesMenu.map(rota => (
            <li
              key={rota.id}
              className={classNames({
                [styles.container__link]: true,
                [styles['container--dark']]: theme === 'dark' ? true : false,
                [styles['container__highlighted']]: location.pathname === rota.to ? true : false,
              })}
            >
              <Link to={rota.to} >
                {rota.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={classNames({
          [styles.container__hamburguer]: true,
          [styles['container__hamburguer--active']]: menuState
        })}>
        <ul>
          {routesMenu.map(rota => (
            <li key={rota.id} className={styles.options}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.container__mode} onClick={() => changeMode()}>{changeIcon()}</div>
      <Hamburguer onClick={handleMenuState} className={styles.hamburguer} />
    </div>
  );
}
