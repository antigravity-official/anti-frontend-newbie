import { EuroInfo } from '../component/EuroInfo/EuroInfoModel';
import client from './client';

export interface Exchange {
  euro: () => Promise<EuroInfo>;
}

export default class ExchangeApi implements Exchange {
  async euro(): Promise<EuroInfo> {
    const { data } = await client.get('forex/recent', {
      params: {
        codes: 'FRX.KRWEUR',
      },
    });

    console.log('data', data[0]);

    return data[0];
  }
}
