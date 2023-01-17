import { EurInfo } from "../model/eurInfo";
import api from "./common";

/**
 * 환율조회 api
 */
export const getEurInfo = async () => {
  const { data } = await api<EurInfo[]>("v1/forex/recent?codes=FRX.KRWEUR");
  return data[0];
};
