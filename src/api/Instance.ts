import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://quotation-api-cdn.dunamu.com/',
  timeout: 1000,
  responseType: 'json',
  responseEncoding: 'utf8',
});

export default Instance;
