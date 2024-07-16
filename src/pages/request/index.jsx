import React, { useState } from 'react';
import Styles from '../../pages/request/request.module.scss';
import { ReactComponent as Close } from '../../assets/close.svg';
import Input from 'components/input';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Trolley } from '../../assets/trolley.svg';
import { ReactComponent as Upload } from '../../assets/upload.svg';
import { ReactComponent as ArrowDown } from '../../assets/keyboard_arrow_down_24 2.svg';
import { ReactComponent as ArrowUp } from '../../assets/keyboard_arrow_up_24 1.svg';
import TextArea from 'components/textArea';
import InputFile from 'components/inputFile';

export default function Request() {
  const navigate = useNavigate();
  const [product, setProduct] = useState('');
  let [amount, setAmount] = useState(0);

  console.log(product);


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
            <InputFile />
            <Upload className={Styles.upload} />
          </span>

          <span>
            <Input label={'Produto'} placeholder={'Selecione o produto'} value={product} bottom={'0.5rem'} type={'select'} change={setProduct} />
            <div className={Styles.containerElement}>
              <div className={Styles.ContainerBtnArrow}>
                <ArrowUp className={Styles.arrowUp} onClick={() => setAmount(amount + 1)} />
                <ArrowDown className={Styles.arrowDown} onClick={amount > 0 ? () => setAmount(amount - 1) : () => setAmount(0)} />
              </div>
              <p>Qtd: {amount}</p>

            </div>
          </span>

          <span>
            <Input label={'Número de série'} placeholder={'Digite o Número de série'} value={''} bottom={'0.5rem'} />

          </span>

          <span>
            <TextArea />

          </span>
        </div>

      </div>
    </div>
  );
}
