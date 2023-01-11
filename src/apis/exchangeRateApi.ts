import axios from 'axios';

const apiRoot = axios.create({
  baseURL: 'https://quotation-api-cdn.dunamu.com/v1/forex/recent',
});

const getExchangeRateApi = async (to: string, from: string) => {
  try {
    const { data } = await apiRoot.get(`?codes=FRX.${to}${from}`);
    return data[0];
  } catch (error) {
    throw error;
  }
};

export default getExchangeRateApi;
