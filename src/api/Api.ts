export const getData = async () => {
  const response = await fetch(
    "https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR"
  )
    .then((res) => res.json())
    .then((array) => array[0]);
  return response;
};
