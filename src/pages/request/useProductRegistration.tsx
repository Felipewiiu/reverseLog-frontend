import useHttp from 'HTTP';
import { useState } from 'react';

interface Product {
  id_produto: number;
  quantidade: number;
}

interface Request {
  nf_compra: string;
  produto: Product[];
  descricao_defeito: string;
  cliente_id: string;
}

const useProductRegistration = () => {
  const http = useHttp();
  const [send, setSend] = useState({loading: false, error: false, success: false});

  const registerProduct = (obj: Request) => {
    setSend({loading: true, error: false, success: false});
    
    const request = {
      nf_compra: obj.nf_compra,
      produto: obj.produto,
      descricao_defeito: obj.descricao_defeito,
      cliente_id: obj.cliente_id
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
