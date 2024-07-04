import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080/',
  xsrfHeaderName: sessionStorage.getItem('token')
});


export default http;