import { GetExchangeInfoByCodeReturnType } from "./ExchangeApi.type";
import axios from "axios";

export const getExchangeInfoByCodeInfo = async (
  codes: string
): Promise<GetExchangeInfoByCodeReturnType[]> => {
  const { data } = await axios({
    method: "GET",
    url: `https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=${codes}`,
  });
  return data;
};
