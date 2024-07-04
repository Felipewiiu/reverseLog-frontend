import React, { useState } from 'react';
import styles from './register.module.scss';
import Input from 'components/input';
import Button from 'components/button';
import { ReactComponent as Close } from '../../assets/close.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const closeTable = () => {
    setOpen(true);
    navigate('/home');
  };

  return (
    <div className={classNames({
      [styles.container]: true,
      [styles['container--close']]: open === true ? true : false
    })}>

      <div className={styles.container__template__close}>
        <Close onClick={closeTable} style={{ cursor: 'pointer' }} className={styles.btnX} />
      </div>
      <div className={styles.container__template}>
        <div className={styles.container__template__box}>
          <div className={styles.container__template__box__title}>

            <p>Atualização de cadastro</p>
          </div>

          <form className={styles.container__template__box__form}>
            <div >
              <Input label={'Nome'} marginBotton={'1rem'} placeholder={'Digite o seu nome'}/>
              <Input label={'E-mail'} marginBotton={'1rem'} placeholder={'Digite o seu E-mail'}/>
              <Input label={'Telefone'} marginBotton={'1rem'} placeholder={'Digite o seu telefone'}/>
              <Input label={'Password'} marginBotton={'1rem'} placeholder={'Digite o seu nome'}/>
              <Input label={'Cpf'} marginBotton={'1rem'} placeholder={'Digite o seu CPF'}/>
              <Input label={'CNPJ'} marginBotton={'1rem'} placeholder={'Digite o seu CNPJ'}/>

            </div>
            <div  >
              <Input label={'Logradouro'} marginBotton={'1rem'} placeholder={'Digite o seu logradouro'}/>
              <Input label={'Bairro'} marginBotton={'1rem'} placeholder={'Digite o seu bairro'}/>
              <Input label={'CEP'} marginBotton={'1rem'} placeholder={'Digite o seu CEP'}/>
              <Input label={'Número'} marginBotton={'1rem'} placeholder={'Digite o seu número'}/>
              <Input label={'Complemento'} marginBotton={'1rem'} placeholder={'Digite o seu complemento'}/>
              <Input label={'Cidade'} marginBotton={'1rem'}placeholder={'Digite a sua cidade'} />
              <Input label={'UF'} marginBotton={'1rem'} placeholder={'Digite o seu distrito'}/>
            </div>

          </form>
          <div className={styles.container__template__box__btn}>

            <Button name={'Enviar'} type={'submit'} background={'rgb(0, 140, 255)'} color={'#ffff'} />

          </div>
        </div>


      </div>

    </div>
  );
}
