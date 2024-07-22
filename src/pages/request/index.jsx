import React, { useState } from 'react';
import Styles from '../../pages/request/request.module.scss';
import { ReactComponent as Close } from '../../assets/close.svg';
import Input from 'components/input';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Trolley } from '../../assets/trolley.svg';
import { ReactComponent as Upload } from '../../assets/upload.svg';
import TextArea from 'components/textArea';
import InputFile from 'components/inputFile';
import Select from 'components/select';
import Button from 'components/button';
import useRequestProductList from './requestProductList';
import useRequestProductById from './useRequestProductById';
import classNames from 'classnames';
import useAddItemTrolley from './useAddItemTrolley';


export default function Request() {
  const [amount, setAmount] = useState('');
  const [describe, setDescribe] = useState('');
  const [modalState, setModalstate] = useState(false);
  const [valueSelected, setValue] = useState('1');

  const productList = useRequestProductList();
  const image = useRequestProductById({ valueSelected });
  const navigate = useNavigate();
  const { itemsTrolley, addItem } = useAddItemTrolley();

  console.log(itemsTrolley);

  const handleAddItem = () => {
    addItem({ id: valueSelected, amount: Number(amount) });
    
  };






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
          <span onClick={() => setModalstate(true)}>
            <Trolley />
          </span>

        </div>

        <div className={Styles.container__midlleBox}>
          <div className={Styles.container__windows__midlle}>
            <span>
              <InputFile />
              <Upload className={Styles.upload} />
            </span>

            <span>
              <Select change={setValue} productList={productList} />

            </span>

            <span>
              <Input label={'Quantidade'} placeholder={'Digite a quantidade'} valueSelected={amount} bottom={'0.5rem'} change={setAmount} />

            </span>

            <span>
              <TextArea change={setDescribe} valueSelected={describe} />

            </span>
          </div>
          <div className={Styles.container__img}>
            <img src={`data:image/jpeg;base64,${image}`} alt="" className={Styles.container__img_item} />
          </div>
        </div>
        <div className={Styles.containerBtn} >
          <span onClick={handleAddItem} >
            <Button name={'Adicionar'} background={'#3B82F6'} color={'#ffff'} />

          </span>

        </div>

      </div>

      <div className={classNames({
        [Styles['modal__finish__request--closed']]: true,
        [Styles['modal__finish__request']]: modalState == true ? true : false
      })}>
        <div className={Styles.modal__finish__request__container}>
          <div className={Styles.modal_header}>
            <span onClick={() => setModalstate(false)}>
              <Close />
            </span>
          </div>
          <div className={Styles.modal_content}>
            <span>

            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
