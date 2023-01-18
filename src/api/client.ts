import axios from 'axios';

const client = axios.create({
  baseURL: 'https://quotation-api-cdn.dunamu.com/v1',
});

export default client;
