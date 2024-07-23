import React, { useState } from 'react';
import styles from './home.module.scss';
import Input from 'components/input';
import { ReactComponent as MenssageIcon } from '../../assets/menssageIcon.svg';
import { ReactComponent as Smartlog } from '../../assets/❮ Smartlog ❯.svg';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as ContractIcon } from '../../assets/contract.svg';
import { ReactComponent as Suport } from '../../assets/suport.svg';
import { ReactComponent as Logout } from '../../assets/logout.svg';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import parseJwt from 'security/securityValidationId';


export default function Home() {

  const [search, setSearch] = useState('');
  const location = useLocation();
  const token = sessionStorage.getItem('token');
  const decodedToken = parseJwt(token);
  const navigate = useNavigate();


  const logout = () => {
    navigate('/');
    sessionStorage.removeItem('token');
  };

  if (decodedToken?.sub == null) {
    return <h1>Autenticação necessária!</h1>;
  }else{
    sessionStorage.setItem('email_cliente', decodedToken.sub);
  }

  

  return (
    <div className={styles.container}>
      <div className={styles.container__template}>
        

        <div className={styles.container__template__main}>
          <header>
            <h1>
              <Smartlog />
            </h1>
            <Input type={'text'} placeholder={'Serach'} change={setSearch} value={search} valueWidh={'500px'} borderRadiusValue={'12px'} bottom={'0px'}/>

            <span>
              <MenssageIcon style={{ cursor: 'pointer' }} />
              <div className={styles.container__template__main__image}></div>
              <p>Infonet</p>
            </span>

          </header>

          <div className={styles.container__template__main__boxContainer}>
            <aside className={styles.container__template__main__boxContainer__aside}>

              <ul className={styles.container__template__main__boxContainer__aside__box}>
                <Link to={'/home'} className={styles.Link}>
                  <li className={classNames({
                    [styles['itemLabel--active']]: location.pathname === '/home' ? true : false
                  })}>
                    <span>
                      <HomeIcon />
                    </span>

                    Dashboard
                  </li>
                </Link>

                <Link to={'/home/cadastro'} className={styles.Link}>
                  <li className={classNames({
                    [styles['itemLabel--active']]: location.pathname === '/home/cadastro' ? true : false
                  })}>
                    <span>
                      <ContractIcon />
                    </span>
                    Cadastro
                  </li>
                </Link>

                <li>
                  <span>
                    <Suport />
                  </span>
                  Fale conosco
                </li>
                <li onClick={logout}>
                  <span>
                    <Logout />
                  </span>
                  Sair
                </li>
              </ul>
            </aside>
            <Outlet />
          </div>

        </div>
      </div>
    </div >
  );
}
