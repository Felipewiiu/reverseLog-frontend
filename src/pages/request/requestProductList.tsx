import useHttp from 'HTTP';
import { useEffect, useState } from 'react';




export default function useRequestProductList() {
  const http = useHttp();
  const [listProduct, setListProduct] = useState([]);



  useEffect(() => {

    http.get('/produtos?page=0')
      .then((response) => {
        setListProduct(response.data.content);
        

      })
      .catch(e => {
        alert('Erro no servidor: ' + e);
      });
  }, []);

  return listProduct;
}