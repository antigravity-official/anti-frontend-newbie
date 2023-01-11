import Axios from "../../../api/apiController";
import { EurInfoTypes } from "../types";

export const getEurInfo = async (): Promise<EurInfoTypes> => {
  const apiURL =
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR";
  const { data } = await Axios.get(apiURL);
  return data[0];
};
