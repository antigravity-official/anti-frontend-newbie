import axios from 'axios';

const Instance = axios.create({
  baseURL: 'https://quotation-api-cdn.dunamu.com/v1/forex',
  timeout: 1000,
});

// 요청 인터셉터
Instance.interceptors.request.use(
  (request) => request,
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터
Instance.interceptors.response.use(
  (response) => {
    console.log('No error');
    return response;
  },
  async (error) => {
    
  },
);

export default Instance;
