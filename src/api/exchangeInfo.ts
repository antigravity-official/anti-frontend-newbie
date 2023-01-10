import { exchangeApi } from "./exchangeApi";

export const getInfo = async () => {
  const res = await exchangeApi.get("/recent?codes=FRX.KRWEUR");
  const krweur = res.data[0];
  return krweur;
};
