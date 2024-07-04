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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [publicPlace, setPublicPlace] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [cep, setCep] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const emailVerify = parseJwt(sessionStorage.getItem('token'));
  console.log(emailVerify.sub);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      'name': name,
      'email': email,
      'telefone': phone,
      'cpf': cpf,
      'cnpj': cnpj,
      'logradouro': publicPlace,
      'bairro': neighborhood,
      'cep': cep,
      'numero': number,
      'complemento': complement,
      'cidade': city,
      'uf': uf,
      'password': password
    };

    http.put(`clientes/update-custumer?email=${emailVerify.sub}`, payload )
      .then((response) => {
        console.log(response);
      })
      .catch(error => {
        alert('error: ' + error);
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
            <div >
              <Input label={'Nome'} marginBotton={'1rem'} change={setName} placeholder={'Digite o seu nome'} />
              <Input label={'E-mail'} marginBotton={'1rem'} change={setEmail} placeholder={'Digite o seu E-mail'} />
              <Input label={'Telefone'} marginBotton={'1rem'} change={setPhone} placeholder={'Digite o seu telefone'} />
              <Input label={'Cpf'} marginBotton={'1rem'} change={setCpf} placeholder={'Digite o seu CPF'} />
              <Input label={'CNPJ'} marginBotton={'1rem'} change={setCnpj} placeholder={'Digite o seu CNPJ'} />
              <Input label={'UF'} marginBotton={'1rem'} change={setUf} placeholder={'Digite o seu distrito'} />

            </div>
            <div  >
              <Input label={'Logradouro'} marginBotton={'1rem'} change={setPublicPlace} placeholder={'Digite o seu logradouro'} />
              <Input label={'Bairro'} marginBotton={'1rem'} change={setNeighborhood} placeholder={'Digite o seu bairro'} />
              <Input label={'CEP'} marginBotton={'1rem'} change={setCep} placeholder={'Digite o seu CEP'} />
              <Input label={'Número'} marginBotton={'1rem'} change={setNumber} placeholder={'Digite o seu número'} />
              <Input label={'Complemento'} marginBotton={'1rem'} change={setComplement} placeholder={'Digite o seu complemento'} />
              <Input label={'Cidade'} marginBotton={'1rem'} change={setCity} placeholder={'Digite a sua cidade'} />
              
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
