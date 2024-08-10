import React, { useState } from 'react';
import styles from './progress.module.scss';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as PicturePdf } from '../../assets/picture_as_pdf.svg';
import { ReactComponent as Vector } from '../../assets/Vector.svg';
import { ReactComponent as Arrow } from '../../assets/keyboard_arrow_down_24 2.svg';
import classNames from 'classnames';
import { Knob } from 'primereact/knob';
import useProgressRequest from './useProgressRequest';

export default function Progress() {

  const [cardOpen, setCardOpen] = useState(false);
  const [stateProgress, setStateProgress] = useState(70);
  const progressRequestList = useProgressRequest();

  const hendlecard = () => {
    setCardOpen(!cardOpen);
  };



  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <h1>Solicitações em andamento</h1>
      </div>
      <div className={styles.container__main}>
        <div className={styles.container__main__card}>
          <span className={styles.container__main__card__IDrequest}>
            <p>ID solicitação</p>
            <div>
              25
            </div>
          </span>

          <span className={styles.container__main__card__generic}>
            <div><Calendar /> <p>Data da solicitação</p></div>
            <p>20/07/2023</p>
          </span>

          <span className={styles.container__main__card__generic}>
            <div><PicturePdf /> <p>NF de RMA</p></div>
            <p>20009</p>
          </span>

          <span className={classNames({
            [styles.container__main__card__generic]: true,
            [styles['container__main__card__generic--open']]: cardOpen
          })}>
            <div><Vector /> <p>Descrição de defeito</p></div>
            <p className={styles.describe} onClick={hendlecard}>
              <Arrow />
            </p>
            <p>Apresenta defeito nas portas de comunicação.
              Foi feito reparo e mesmo assim não resolvel
              Apresenta defeito nas portas de comunicação.
              Foi feito reparo e mesmo assim não resolvelApresenta defeito nas portas de comunicação.
              Foi feito reparo e mesmo assim não resolvel
            </p>


          </span>

          <span className={styles.container__main__card__knob} >
            <Knob value={stateProgress} valueTemplate={'{value}%'} readOnly textColor='#0765F2' valueColor='#0765F2' />

          </span>
        </div>

      </div>


    </div>
  );
}
