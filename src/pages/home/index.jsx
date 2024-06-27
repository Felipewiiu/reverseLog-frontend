import React from 'react';
import styles from './home.module.scss';
import Input from 'components/input';
import { ReactComponent as MenssageIcon } from '../../assets/menssageIcon.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.container__template}>
        <aside className={styles.container__template__aside}>

        </aside>

        <div className={styles.container__template__main}>
          <header>
            <Input type={'text'} placeholder={'Serach'} />

            <span>
              <MenssageIcon />
              <div className={styles.container__template__main__image}></div>
            </span>

          </header>

        </div>
      </div>
    </div>
  );
}
