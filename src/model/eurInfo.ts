import { EurInfo } from "../interfaces/euro";

const EUR_API_URL = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR";

export const getEurInfo = (): { read: () => EurInfo } => {
  let eurInfo: EurInfo | null = null;

  const krweur = fetch(EUR_API_URL)
    .then((response) => response.json())
    .then((array) => {
      // 로딩중임을 보여주기 위해서 2초 delay
      setTimeout(() => {
        eurInfo = array[0];
      }, 2000);
    });

  return {
    read() {
      if (eurInfo === null) throw krweur;
      else return eurInfo;
    },
  };
};

export default getEurInfo;
