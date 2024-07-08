import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8080/'
});

const token = sessionStorage.getItem('token');

token != null ? http.defaults.headers.common['Authorization'] = `Bearer ${token}` : '';




export default http;