import axios from 'axios';
import { useEffect, useState } from 'react';


const useHttp = () => {

  const instanse = axios.create({
    baseURL: 'http://localhost:8080/'
  });

  useEffect(() =>{
    
    const token = sessionStorage.getItem('token');
    
    token != null ? instanse.defaults.headers.common['Authorization'] = `Bearer ${token}` : '';
    
  });

  return instanse;
};



export default useHttp;