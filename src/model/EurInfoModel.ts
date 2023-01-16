// 주소값 상수화
const BASE_URL = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR";

// model ExchangeGetModel
const EurInfoModel = async () => {
  const krweur = await fetch(BASE_URL)
    .then((response) => response.json())
    .then((array) => array[0]);
  return krweur;
};

export default EurInfoModel;
