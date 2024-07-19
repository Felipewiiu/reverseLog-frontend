import useHttp from 'HTTP';
import { useEffect, useState } from 'react';

interface Props {
  valueSelected : string
}

export default function useRequestProductById(props: Props) {
  const http = useHttp();
  const [image, setImage] = useState();

  useEffect(() => {

    http.get(`/produtos/${props.valueSelected}`)
      .then((response) => {
        setImage(response.data.image);


      })
      .catch(e => {
        alert('Erro no servidor: ' + e);
      });
  }, [props.valueSelected]);

  return  image;

}