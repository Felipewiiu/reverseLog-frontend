import React from 'react';
import Styles from './textArea.module.scss';

interface Props {
  change: (value: string) => void;
  value: string;
}

export default function TextArea(props : Props) {
  return (
    <div className={Styles.container}>
      <label htmlFor="description" >Descrição de defeito</label>
      <textarea
        id='description'
        rows={20}
        className={Styles.textarea_}
        onChange={e => props.change(e.target.value)}
        value={props.value}
      />
    </div>
  );
}
