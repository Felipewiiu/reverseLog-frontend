import styles from './login.module.scss';
import Menu from 'components/menu';
import { useContext } from 'react';
import { ThemeContext } from 'context/themeContext';
import classNames from 'classnames';



export default function Home() {
  const { theme, toggleTheme} = useContext(ThemeContext);
  console.log(theme);

  return (
    <section className={classNames({
      [styles.container]: true,
      [styles['container--dark']]: theme === 'dark'? true : false
    })}>
     


    </section >
  );
}
