const BASE_URL = 'https://quotation-api-cdn.dunamu.com';

export const getEurInfo = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/v1/forex/recent?codes=FRX.KRWEUR`
    );
    if (!response.ok) throw new Error();
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.log(error);
  }
};
