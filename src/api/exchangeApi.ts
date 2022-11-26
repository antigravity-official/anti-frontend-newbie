import { instance } from './api';

export const getEurInfo = async () => {
  const krweur = await instance.get('v1/forex/recent?codes=FRX.KRWEUR');
  return krweur.data[0];
};
