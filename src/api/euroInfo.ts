import axios from 'axios';
import { API } from '@constants/api';
import { ExchangeRateType } from '@type/exchangeRate';

export const getEuroInfoData = async () => {
  try {
    const response = await axios.get<ExchangeRateType[]>(`${API.Euro}`);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
