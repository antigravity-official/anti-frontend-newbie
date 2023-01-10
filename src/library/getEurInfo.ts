import axios from "axios";

export const getEurInfo = async () => {
  const { data } = await axios.get(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  );
  return data[0];
};
