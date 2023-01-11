const baseUrl = "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"

const getEurInfo = async () => {
    const response = await fetch(baseUrl)
    const array = await response.json();
    const krweur = await array[0];
    return krweur;
  };

// eslint-disable-next-line import/no-anonymous-default-export
export default { getEurInfo };