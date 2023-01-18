import { requestApi } from './requestApi';

export const getExchangeKrwEurDatasApi = async () => {
  const exchangeDatas = await requestApi(`/v1/forex/recent?codes=FRX.KRWEUR`, {
    method: 'GET',
  });

  return exchangeDatas;
};
