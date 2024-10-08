import styles from './login.module.scss';
import Input from 'components/input';
import { useContext, useState } from 'react';
import { ThemeContext } from 'context/themeContext';
import classNames from 'classnames';
import Button from 'components/button';
import useHttp from 'HTTP';
import { useNavigate } from 'react-router-dom';




export default function Login() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const http = useHttp();

  
  const register = () => navigate('/home/cadastro');

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
        navigate('/home');

      })
      .catch(error => {
        console.log('Não foi possível fazer o seu login:  ' + error.message);

      });

  };


  return (
    <section className={classNames({ [styles.container]: true, [styles['container--dark']]: theme === 'dark' ? true : false })}>

      <div className={styles.container__screenAnimation}>
        <h1 className={styles.container__screenAnimation__title}>
          ❮ Reverselog ❯
        </h1>

      </div>

      <form className={styles.container__formLogin} >
        <Input label={'E-mail'} type={'text'} placeholder={'Digite seu e-mail'} change={setEmail} value={email} bottom={'10px'} />
        <Input label={'Senha'} type={'password'} placeholder={'Digite a sua senha'} change={setPassword} value={password} bottom={'10px'} />

        <div className={styles.container__formLogin__btn}>
          <Button name={'Login'} type={'submit'} func={toSubmitForm} background={'#3B82F6'} color={'#ffff'} />
          <Button name={'Cadastrar'} type={'submit'} func={register} background={'#3B82F6'} color={'#ffff'} />
        </div>

        <div className={styles.container__formLogin__span}>
          <span className={styles.container__formLogin__span_element}>Esqueci minha senha</span>
          <span className={styles.container__formLogin__span_element} >Redefinir senha</span>
        </div>


      </form>

    </section >
  );
}
