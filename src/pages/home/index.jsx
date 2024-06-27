import React, { useState } from 'react';
import styles from './home.module.scss';
import Input from 'components/input';
import { ReactComponent as MenssageIcon } from '../../assets/menssageIcon.svg';
import { ReactComponent as Smartlog } from '../../assets/❮ Smartlog ❯.svg';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as ContractIcon } from '../../assets/contract.svg';
import { ReactComponent as Suport } from '../../assets/suport.svg';
import { ReactComponent as RequestIcon } from '../../assets/description.svg';
import { ReactComponent as RequestRma } from '../../assets/solicitacoes.svg';
import { ReactComponent as Progress } from '../../assets/andamento.svg';
import { ReactComponent as Finished } from '../../assets/finalizado.svg';


export default function Home() {

  const [search, setSearch] = useState('');
  console.log(search);


  return (
    <div className={styles.container}>
      <div className={styles.container__template}>
        <aside className={styles.container__template__aside}>
          <Smartlog />
          <ul className={styles.container__template__aside__box}>
            <li><span><HomeIcon /></span>Dashboard</li>
            <li><span><ContractIcon /></span>Cadastro</li>
            <li><span><RequestIcon /></span>Solicitação de RMA</li>
            <li><span><Suport /></span>Fale conosco</li>
          </ul>
        </aside>

        <div className={styles.container__template__main}>
          <header>
            <Input type={'text'} placeholder={'Serach'} change={setSearch} value={search} />

            <span>
              <MenssageIcon style={{ cursor: 'pointer' }} />
              <div className={styles.container__template__main__image}></div>
              <p>Infonet</p>
            </span>

          </header>


          <div className={styles.container__template__main__boxContainer}>
            <p><HomeIcon/>Dashboard</p>
            <div className={styles.container__template__main__boxContainer__dashborad}>
              <span>
                <RequestRma />
                <p>Solicitações</p>
              </span>

              <span>
                <Progress />
                <p>Andamento</p>
              </span>

              <span>
                <Finished />
                <p>Finalizado</p>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
