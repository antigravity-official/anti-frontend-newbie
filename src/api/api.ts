import { KrwEur } from "../types/krweur";
export const getEurInfo = async () => {
  try {
    const krweur: KrwEur = await fetch(
      "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
    )
      .then((response) => response.json())
      .then((array) => array[0]);
    return krweur;
  } catch (error) {
    console.log(error);
  }
};
