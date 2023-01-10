import axios from 'axios';
import { endPoint } from '../utils/Constant';

export const getEurInfo = async () => {
  try {
    const response = await axios.get(endPoint);
    const eurData = response.data[0];
    return eurData;
  } catch (e) {
    console.error(e);
  }
};
