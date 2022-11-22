import { selectorFamily } from "recoil";
import { ExchangeEurState } from "./Atom";

export const ExchangeEurSelector = selectorFamily({
  key: "ExchangeEurToKrw",
  get:
    (exchangeData: number) =>
    ({ get }) => {
      const Eur = get(ExchangeEurState);
      const Krw = (+Eur * exchangeData).toFixed(2);
      const result = Krw.toString().replace(
        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
        ","
      );
      return result;
    },
});
