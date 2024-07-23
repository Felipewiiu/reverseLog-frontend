import React, { useEffect } from 'react';
import useHttp from 'HTTP';

interface Product {
  id_produto: number;
  quantidade: number
}

interface Request {
  nf_compra: string;
  produto: Product[];
  descricao_defeito: string;
  cliente_id: string
}

const useProductRegistration = () => {
  const http = useHttp();

  const registerProduct = (obj: Request) => {
    const request = {
      nf_compra: obj.nf_compra,
      produto: obj.produto,
      descricao_defeito: obj.descricao_defeito,
      cliente_id: obj.cliente_id
    };

    http.post('/solicitacao', request)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return registerProduct;
};

export default useProductRegistration;
