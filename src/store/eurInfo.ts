import { atom, selector } from "recoil";
import { KrwFormatter } from "../lib/utils";
import { IEurInfo } from "../types/eurInfo";

export const EurInfoAtom = atom<IEurInfo>({
  key: "EurInfoAtom",
  default: {} as IEurInfo,
});

export const EurInfoSelector = selector({
  key: "EurInfoSelector",
  get: ({ get }) => {
    const eurInfo = get(EurInfoAtom);
    const exchangeEurToKrw = (krw: number) =>
      KrwFormatter(krw * eurInfo.basePrice);

    return { exchangeEurToKrw };
  },
});
