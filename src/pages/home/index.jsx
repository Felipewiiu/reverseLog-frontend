import React, { useState } from 'react';
import styles from './home.module.scss';
import Input from 'components/input';
import { ReactComponent as MenssageIcon } from '../../assets/menssageIcon.svg';
import { ReactComponent as Smartlog } from '../../assets/❮ Smartlog ❯.svg';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as ContractIcon } from '../../assets/contract.svg';
import { ReactComponent as Suport } from '../../assets/suport.svg';
import { ReactComponent as RequestIcon } from '../../assets/description.svg';
import { Link, Outlet } from 'react-router-dom';


export default function Home() {

  const [search, setSearch] = useState('');
  console.log(search);


  return (
    <div className={styles.container}>
      <div className={styles.container__template}>
        <aside className={styles.container__template__aside}>
          <Smartlog />
          <ul className={styles.container__template__aside__box}>
            <Link to={'/home'} className={styles.Link}>
              <li>
                <span>
                  <HomeIcon />
                </span>

                Dashboard
              </li>
            </Link>

            <Link to={'/home/cadastro'} className={styles.Link}>
              <li>
                <span>
                  <ContractIcon />
                </span>
                Cadastro
              </li>
            </Link>

            <li>
              <span>
                <RequestIcon />
              </span>
              Solicitação de RMA
            </li>
            <li>
              <span>
                <Suport />
              </span>
              Fale conosco
            </li>
          </ul>
        </aside>

        <div className={styles.container__template__main}>
          <header>
            <Input type={'text'} placeholder={'Serach'} change={setSearch} value={search} valueWidh={'500px'} borderRadiusValue={'12px'} />

            <span>
              <MenssageIcon style={{ cursor: 'pointer' }} />
              <div className={styles.container__template__main__image}></div>
              <p>Infonet</p>
            </span>

          </header>

          <div className={styles.container__template__main__boxContainer}>
            <Outlet />
          </div>

        </div>
      </div>
    </div >
  );
}
