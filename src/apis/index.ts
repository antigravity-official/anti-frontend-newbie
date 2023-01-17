import axios from "axios";
import { EuroInfoType } from "types/euroInfo";

export const getEuroInfo = async (): Promise<EuroInfoType> => {
  const { data } = await axios(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  );
  return data[0];
};
