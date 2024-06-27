import styles from './login.module.scss';
import Input from 'components/input';
import { useContext, useState } from 'react';
import { ThemeContext } from 'context/themeContext';
import classNames from 'classnames';
import Button from 'components/button';
import http from 'HTTP';



export default function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusRequisition, setStatusRequisition] = useState('');


  const toSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = {
      'login': email,
      'senha': password
    };

    http.post('/login', user)
      .then((response) => {
        sessionStorage.setItem('token', response.data.tokenJWT);
        setEmail('');
        setPassword('');
        setStatusRequisition('Cliente logado com sucesso');
      })
      .catch(error => {
        setStatusRequisition(error.message);

      });



  };


  return (
    <section className={classNames({ [styles.container]: true, [styles['container--dark']]: theme === 'dark' ? true : false })}>

      <div className={styles.container__screenAnimation}>
        <h1 className={styles.container__screenAnimation__title}>
          ❮ Smartlog ❯
        </h1>
  
      </div>

      <form className={styles.container__formLogin} >
        <Input label={'E-mail'} type={'text'} placeholder={'Digite seu e-mail'} change={setEmail} value={email} />
        <Input label={'Senha'} type={'password'} placeholder={'Digite a sua senha'} change={setPassword} value={password} />

        <div className={styles.container__formLogin__btn}>
          <Button name={'login'} type={'submit'} func={toSubmitForm} background={'#3B82F6'} color={'#ffff'} />
          <Button name={'Cadastrar'} type={'submit'} func={() => console.log('clicou')} background={'#3B82F6'} color={'#ffff'} />
        </div>

        <div className={styles.container__formLogin__span}>
          <span className={styles.container__formLogin__span_element}>Esqueci minha senha</span>
          <span className={styles.container__formLogin__span_element} >Redefinir senha</span>
        </div>


      </form>

    </section >
  );
}
