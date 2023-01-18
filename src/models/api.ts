import axios from "axios";
const BASE_URL = "https://quotation-api-cdn.dunamu.com/v1";

export const getEurInfo = async () => {
  const { data } = await axios.get(`${BASE_URL}/forex/recent?codes=FRX.KRWEUR`);
  return data[0];
};
