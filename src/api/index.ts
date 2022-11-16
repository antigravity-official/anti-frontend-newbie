export const getEurInfo = async () => {
  try {
    const data = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR',
      { method: 'get' }
    )
      .then((response) => response.json())
      .then((array) => array[0]);
    return data;
  } catch (error) {
    return error;
  }
};
