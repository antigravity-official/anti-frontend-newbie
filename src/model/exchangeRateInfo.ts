import { atom, selector } from 'recoil';

import { getEuroInfoData } from '@api/euroInfo';
import { ExchangeRateType } from '@type/exchangeRate';

export const euroInfoData = atom<ExchangeRateType[]>({
  key: `euroInfoData`,
  default: [],
});

export const getEuroInfo = selector<ExchangeRateType[]>({
  key: `GET/getEuroInfo`,
  get: async () => {
    const euroInfoData = await getEuroInfoData();
    return euroInfoData;
  },
});
