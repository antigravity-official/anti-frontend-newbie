import { requestApi } from './requestApi';

export const getExchangeKrwEurInfosApi = async () => {
  const exchangeDatas = await requestApi(`/v1/forex/recent?codes=FRX.KRWEUR`, {
    method: 'GET',
  });

  return exchangeDatas;
};
