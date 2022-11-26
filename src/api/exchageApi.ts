import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://quotation-api-cdn.dunamu.com/',
});

instance.interceptors.request.use(
  function (config) {
    console.log(config, '요청 직전');
    return config;
  },
  function (error) {
    console.log(error, '통신에러');
    return Promise.reject(error);
  }
);


export const getEurInfo = async () => {
  const krweur = await instance.get('v1/forex/recent?codes=FRX.KRWEUR');
  return krweur.data[0];
};
