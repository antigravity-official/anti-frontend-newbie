export const useCalMoney = (exchange: string, basePrice: number) => {
  const Krw = (+exchange * basePrice).toFixed(2);
  const result = Krw.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  return result;
};
