export const useCalMoney = (exchange: string, basePrice: number) => {
  const Krw = Math.floor(+exchange * basePrice);
  const result = Krw.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return result;
};
