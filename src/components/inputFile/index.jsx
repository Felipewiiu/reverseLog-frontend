import React, { useState } from 'react';
import styles from './inputFile.module.scss';

export default function InputFile() {

  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const  file = e.target.files[0];
    console.log(file);

    if(file) {
      setFileName(file.name);
    }else{
      setFileName('');
    }
  };

  return (
    <div className={styles.container}>
      <input
        type='file'
        className={styles.file_input}
        id='upload'
        onChange={handleFileChange}
      />

      <label
        htmlFor='upload'
        className={styles.file_label}>
        Escolher Arquivo
      </label>

      <div
        className={styles.file_name}
        id='file-name'
      >
        {fileName}
      </div>
    </div>
  );
}
