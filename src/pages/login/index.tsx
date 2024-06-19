import styles from './login.module.scss';
import Input from 'components/input';
import { useContext, useState } from 'react';
import { ThemeContext } from 'context/themeContext';
import classNames from 'classnames';
import Button from 'components/button';



export default function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState();


  return (
    <section className={classNames({ [styles.container]: true, [styles['container--dark']]: theme === 'dark' ? true : false })}>

      <div className={styles.container__screenAnimation}>
        <h1 className={styles.container__screenAnimation__title}>
        ❮ Reverselog ❯
        </h1>
      </div>

      <div className={styles.container__formLogin}>
        <Input label={'E-mail'} type={'text'} placeholder={'Digite seu e-mail'} change={setEmail} />
        <Input label={'Password'} type={'password'} placeholder={'Digite a sua senha'} change={setEmail} />
        <Button value/>
      </div>

    </section >
  );
}