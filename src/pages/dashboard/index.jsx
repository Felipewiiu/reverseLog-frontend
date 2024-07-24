import React from 'react';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import styles from './dashboard.module.scss';
import { ReactComponent as RequestRma } from '../../assets/solicitacoes.svg';
import { ReactComponent as Progress } from '../../assets/andamento.svg';
import { ReactComponent as Finished } from '../../assets/finalizado.svg';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <p><HomeIcon />Dashboard</p>
      <div className={styles.container__dashborad}>
        <span onClick={() => navigate('/home/solicitacao')}>
          <RequestRma />
          <p>Solicitações</p>
        </span>

        <span onClick={() => navigate('/home/andamento')}>
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
