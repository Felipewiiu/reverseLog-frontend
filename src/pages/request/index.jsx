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
import useProductRegistration from './useProductRegistration';
import Toast from 'components/toast';



export default function Request() {
  const [amount, setAmount] = useState('');
  const [describe, setDescribe] = useState('');
  const [modalState, setModalstate] = useState(false);
  const [valueSelected, setValueSelected] = useState('1');
  const [pdeForbase64, setPdfForbase64] = useState();


  const navigate = useNavigate();
  const productList = useRequestProductList();
  const image = useRequestProductById({ valueSelected });
  const { itemsTrolley, addItem } = useAddItemTrolley();
  const {registerProduct, send} = useProductRegistration();

  console.log(send.error);

  productList.forEach((obj, index) => {
    sessionStorage.setItem(`product_${index}`, JSON.stringify(obj));
  });

  const handleAddItem = () => {
    addItem({ id: Number(valueSelected), amount: Number(amount), description:describe });
    setAmount('');
    setDescribe('');
  };

  const handleProductRegistration = () => {
    registerProduct({
      cliente_id: sessionStorage.getItem('email_cliente'),
      produto: itemsTrolley,
      nf_compra: pdeForbase64
    });

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
            <div>
              {itemsTrolley.length}
            </div>
          </span>

        </div>

        <div className={Styles.container__midlleBox}>
          <div className={Styles.container__windows__midlle}>
            <span>
              <InputFile getFile={setPdfForbase64} />
              <Upload className={Styles.upload} />
            </span>

            <span>
              <Select change={setValueSelected} productList={productList} />

            </span>

            <span>
              <Input label={'Quantidade'} placeholder={'Digite a quantidade'} valueSelected={amount} bottom={'0.5rem'} change={setAmount} value={amount}/>

            </span>

            <span>
              <TextArea change={setDescribe} value={describe} />

            </span>
          </div>
          <div className={Styles.container__img}>
            <img src={`data:image/jpeg;base64,${image}`} alt="" className={Styles.container__img_item} />
          </div>
        </div>
        <div className={Styles.containerBtn} >
          <span onClick={handleAddItem} >
            <Button name={'Adicionar'} background={'rgb(0, 88, 255)'} color={'#ffff'} />

          </span>

        </div>

      </div>

      <div className={classNames({
        [Styles['modal__finish__request--closed']]: true,
        [Styles['modal__finish__request']]: modalState == true ? true : false
      })}>
        <Toast name={'Falha na solicitação!'} active={send.error} background={'#F34F4F'}/>
        <Toast name={'Enviado com sucesso!'} active={send.success} />
        <div className={Styles.modal__finish__request__container}>
          <div className={Styles.modal_header}>
            <span onClick={() => setModalstate(false)}>
              <Close />
            </span>
          </div>
          <div className={Styles.modal_content}>
            {itemsTrolley.map((item) => (
              <span key={item.id}>
                <img src={`data:image/jpeg;base64,${JSON.parse(sessionStorage.getItem(`product_${item.id - 1}`)).image}`} alt="" />
                <div>


                  <p>{`Produto: ${JSON.parse(sessionStorage.getItem(`product_${item.id - 1}`)).nome}`};</p>
                  <p>{`Quantidade: ${item.amount} ${item.amount > 1 ? 'unidades' : 'unidade'} `}</p>
                </div>
              </span>
            ))}
          </div>
          <div className={Styles.btnToSend} onClick={handleProductRegistration}>
            <Button name={'Enviar'} background={'rgb(0, 88, 255)'} color={'rgb(0, 95, 249)'} width={'90%'} />

          </div>
        </div>
      </div>
    </div>
  );
}
