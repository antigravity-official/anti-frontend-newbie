export const decimalReturn = (price: number) =>
  Math.floor(Number(price.toFixed(2)));

export const exchangeToMoney = (exchange: number, basePrice: number) => {
  const exchangeEurToKrw = Math.floor(exchange * basePrice);
  const result = exchangeEurToKrw
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  return result;
};
