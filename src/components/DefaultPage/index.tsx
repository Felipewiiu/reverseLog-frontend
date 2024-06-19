import styles from './DefautPage.module.scss';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import classNames from 'classnames';

export default function DefaultPage() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classNames({
      [styles.container]: true,
      [styles['container--dark']]: theme === 'dark'? true : false
    })}>
      
      <Outlet />

    </div>

  );
}
