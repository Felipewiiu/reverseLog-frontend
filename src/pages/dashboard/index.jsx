import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import styles from './dashboard.module.scss';
import { ReactComponent as RequestRma } from '../../assets/solicitacoes.svg';
import { ReactComponent as Progress } from '../../assets/andamento.svg';
import { ReactComponent as Finished } from '../../assets/finalizado.svg';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <p><HomeIcon />Dashboard</p>
      <div className={styles.container__dashborad}>
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
  );
}
