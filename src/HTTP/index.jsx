import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080/'
});

http.defaults.headers.common['Authorization'] = `Bearer ${sessionStorage?.getItem('token')}`;

export default http;