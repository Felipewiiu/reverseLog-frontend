import React, { useState } from 'react';
import styles from './inputFile.module.scss';

export default function InputFile() {

  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor='upload' className={styles.file_label}> NF de compra </label>
      <div className={styles.container_file}>

        <label className={styles.box} htmlFor='upload'>

          <input
            type='file'
            className={styles.file_input}
            id='upload'
            onChange={handleFileChange}
            accept={'.pdf'}
          />


          <div className={styles.file_name} id='file-name'>{fileName}</div>

        </label>

      </div>
    </div>
  );
}
