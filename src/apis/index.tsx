export const getEurInfo = async () => {
  const krweur = await fetch(
    'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
  );
  return krweur.json();
};
