import React, { useState } from 'react';
import styles from './inputFile.module.scss';

interface Props {
  getFile: (value: File) => void,
}

export default function InputFile(props: Props) {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFileName(selectedFile.name);
      setFile(selectedFile);
      props.getFile(selectedFile);
    } else {
      setFileName('');
      setFile(null);
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor="upload" className={styles.file_label}>NF de compra</label>
      <div className={styles.container_file}>
        <label className={styles.box} htmlFor="upload">
          <input
            type="file"
            className={styles.file_input}
            id="upload"
            onChange={handleFileChange}
            accept=".pdf"
          />
          <div className={styles.file_name} id="file-name">{fileName}</div>
        </label>
      </div>
    </div>
  );
}
