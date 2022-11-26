export const getEurInfo = async () => {
  const res = await fetch(
    'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
  );
  const eurInfo = await res.json();
  return eurInfo[0];
};
