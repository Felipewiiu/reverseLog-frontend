import React, { useState } from 'react';
import styles from './select.module.scss';

interface Props {
  change: (value: string) => void;

}


export default function Select(props: Props) {


  return (
    <div className={styles.container}>
      <label htmlFor="product">Produto</label>
      <select defaultValue={''} name="select" id="product" className={styles.container__select} onChange={event => props.change(event.target.value)}>
        <option value="valor0" ></option>
        <option value="valor1">Valor 1</option>
        <option value="valor2" >Valor 2</option>
        <option value="valor3">Valor 3</option>
        
      </select>
    </div>
  );
}
