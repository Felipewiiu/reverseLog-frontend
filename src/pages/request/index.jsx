import React from 'react';
import Styles from '../../pages/request/request.module.scss';
import { ReactComponent as Close } from '../../assets/close.svg';
import Input from 'components/input';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Trolley } from '../../assets/trolley.svg';
import { ReactComponent as Upload } from '../../assets/upload.svg';
import { ReactComponent as ArrowDown } from '../../assets/keyboard_arrow_down_24 2.svg';
import { ReactComponent as ArrowUp } from '../../assets/keyboard_arrow_up_24 1.svg';

export default function Request() {
  const navigate = useNavigate();

  return (
    <div className={Styles.container}>
      <div className={Styles.container__windows}>
        <div className={Styles.container__windows__header}>
          <span onClick={() => navigate('/home')}>
            <Close />
          </span>

        </div>
        <div className={Styles.container__windows__top}>
          <p>Solicitação de RMA</p>
          <span>
            <Trolley />
          </span>

        </div>

        <div className={Styles.container__windows__midlle}>
          <span>
            <Input label={'NF de compra'} placeholder={'Digite o Número da NF'} bottom={'0.5rem'} />
            <Upload />
          </span>

          <span>
            <Input label={'Produto'} placeholder={'Digite o Número da NF'} bottom={'0.5rem'} />
            <div>
              <ArrowUp/>
              <ArrowDown/>
            </div>
          </span>

        </div>

      </div>
    </div>
  );
}
