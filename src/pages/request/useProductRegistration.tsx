import useHttp from 'HTTP';
import { useState } from 'react';

interface Product {
  id_produto: number;
  quantidade: number;
  description: string;
}

interface Request {
  nf_RMA: string;
  produto: Product[];
  cliente_id: string;
  numero_nf: number
}

const useProductRegistration = () => {
  const http = useHttp();
  const [send, setSend] = useState({loading: false, error: false, success: false});

  const registerProduct = (obj: Request) => {
    setSend({loading: true, error: false, success: false});
    
    const request = {
      nf_RMA: obj.nf_RMA,
      produto: obj.produto,
      cliente_id: obj.cliente_id,
      numero_nf: obj.numero_nf
    };

    http.post('/solicitacao', request)
      .then(response => {
        setSend({loading: false, error: false, success: true});
      })
      .catch(error => {
        setSend({loading: false, error: true, success: false});
      });
  };

  return {registerProduct, send};
};

export default useProductRegistration;
