import React, { useState } from 'react';
import styles from './inputFile.module.scss';

interface Props {
  getFile: (value: string) => void;
}

const convertPdfToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = function (event) {
      const result = event.target?.result as string;
      const base64String = result.split(',')[1];
      resolve(base64String);
    };
    
    reader.onerror = function (error) {
      reject(error);
    };
    
    reader.readAsDataURL(file);
  });
};

export default function InputFile(props: Props) {
  const [fileName, setFileName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      try {
        const base64String = await convertPdfToBase64(selectedFile);
        console.log(base64String);
        props.getFile(base64String);
      } catch (error) {
        console.error('Error:', error);
      }

      setFileName(selectedFile.name);
      setFile(selectedFile);
      
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
