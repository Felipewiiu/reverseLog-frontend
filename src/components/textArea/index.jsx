import React from 'react';
import Styles from './textArea.module.scss';


export default function TextArea() {
  return (
    <div className={Styles.container}>
      <label htmlFor="description" >Descrição de defeito</label>
      <textarea id='description' rows={20} className={Styles.textarea_}/>
    </div>
  );
}
