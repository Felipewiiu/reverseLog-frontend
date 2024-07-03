import React from 'react';
import styles from './register.module.scss';
import Input from 'components/input';
import Button from 'components/button';

export default function Register() {

  return (
    <div className={styles.container}>

      <div className={styles.container__template}>

        <div className={styles.container__template__box}>
          <div className={styles.container__template__box__title}>
            
            <p>Atualização de cadastro</p>
          </div>

          <form className={styles.container__template__box__form}>
            <div >
              <Input label={'Nome'} marginBotton={'1rem'} />
              <Input label={'E-mail'} marginBotton={'1rem'} />
              <Input label={'Telefone'} marginBotton={'1rem'} />
              <Input label={'Password'} marginBotton={'1rem'} />
              <Input label={'Cpf'} marginBotton={'1rem'} />
              <Input label={'CNPJ'} marginBotton={'1rem'} />

            </div>
            <div  >
              <Input label={'Logradouro'} marginBotton={'1rem'} />
              <Input label={'Bairro'} marginBotton={'1rem'} />
              <Input label={'CEP'} marginBotton={'1rem'} />
              <Input label={'Número'} marginBotton={'1rem'} />
              <Input label={'Complemento'} marginBotton={'1rem'} />
              <Input label={'Cidade'} marginBotton={'1rem'} />
              <Input label={'UF'} marginBotton={'1rem'} />
            </div>

          </form>
          <div className={styles.container__template__box__btn}>
            <Button name={'Enviar'} type={'submit'} background={'#3B82F6'} color={'#ffff'} />
          </div>
        </div>


      </div>

    </div>
  );
}
