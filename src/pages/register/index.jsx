import React, { useState } from 'react';
import styles from './register.module.scss';
import Input from 'components/input';
import Button from 'components/button';
import { ReactComponent as Close } from '../../assets/close.svg';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import http from 'HTTP';
import parseJwt from '../../security/securityValidationId';


export default function Register() {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [cnpj, setCnpj] = useState();
  const [publicPlace, setPublicPlace] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [cep, setCep] = useState();
  const [number, setNumber] = useState();
  const [complement, setComplement] = useState();
  const [city, setCity] = useState();
  const [uf, setUf] = useState();

  const emailVerify = parseJwt(sessionStorage.getItem('token'));
  
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      'telefone': phone,
      'cnpj': cnpj,
      'endereco': {
        'logradouro': publicPlace,
        'bairro': neighborhood,
        'cep': cep,
        'numero': number,
        'complemento': complement,
        'cidade': city,
        'uf': uf
      },
      'name': name

    };

    http.put(`clientes/update-custumer?email=${emailVerify.sub}`, payload)
      .then((response) => {
        console.log('Cadastro atualizado');
      })
      .catch(error => {
        console.log(sessionStorage.getItem('token'));
        console.log('error: ' + error);
        console.log(emailVerify.sub);
      });


  };



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

          <form className={styles.container__template__box__form} id='formUpdate'>
            <div>
              <Input label={'Nome'} marginBotton={'1rem'} change={setName} placeholder={'Digite o seu nome'} bottom={'10px'} />
              <Input label={'Telefone'} marginBotton={'1rem'} change={setPhone} placeholder={'Digite o seu telefone'} bottom={'10px'} />
              <Input label={'CNPJ'} marginBotton={'1rem'} change={setCnpj} placeholder={'Digite o seu CNPJ'} bottom={'10px'} />
              <Input label={'UF'} marginBotton={'1rem'} change={setUf} placeholder={'Digite o seu distrito'} bottom={'10px'} />
              <Input label={'Logradouro'} marginBotton={'1rem'} change={setPublicPlace} placeholder={'Digite o seu logradouro'} bottom={'10px'} />

            </div>
            <div  >
              <Input label={'Bairro'} marginBotton={'1rem'} change={setNeighborhood} placeholder={'Digite o seu bairro'} bottom={'10px'} />
              <Input label={'CEP'} marginBotton={'1rem'} change={setCep} placeholder={'Digite o seu CEP'} bottom={'10px'} />
              <Input label={'Número'} marginBotton={'1rem'} change={setNumber} placeholder={'Digite o seu número'} bottom={'10px'} />
              <Input label={'Complemento'} marginBotton={'1rem'} change={setComplement} placeholder={'Digite o seu complemento'} bottom={'10px'} />
              <Input label={'Cidade'} marginBotton={'1rem'} change={setCity} placeholder={'Digite a sua cidade'} bottom={'10px'} />

            </div>

          </form>
          <div className={styles.container__template__box__btn}>
            <Button name={'Enviar'} type={'submit'} background={'rgb(0, 140, 255)'} color={'#ffff'} func={submit} form='formUpdate' />
          </div>
        </div>


      </div>

    </div>
  );
}
