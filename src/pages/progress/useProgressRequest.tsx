import useHttp from 'HTTP';
import { useEffect } from 'react';
import parseJwt from 'security/securityValidationId';




const useProgressRequest = () => {
  const http = useHttp();
  const email = parseJwt(sessionStorage.getItem('token'));

  
  useEffect(() => {

    http.get(`/solicitacao/cliente?email=${email.sub}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });

  }, []);
};
export default useProgressRequest;