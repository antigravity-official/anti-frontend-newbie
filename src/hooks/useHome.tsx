import { ChangeEvent, useState } from "react";
import { PointValidation } from "../lib/validation";
import { useRecoilState, useRecoilValue } from "recoil";
import { EurInfoAtom, EurInfoSelector } from "../store/eurInfo";

export default function UseHome() {
  const [eurInfo] = useRecoilState(EurInfoAtom);
  const [eurTokrw, setEurTokrw] = useState("");
  const { exchangeEurToKrw } = useRecoilValue(EurInfoSelector);

  const exchangeUpDown = eurInfo.basePrice - eurInfo.openingPrice > 0;

  const onChangeInputEur = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.value = PointValidation(e.target.value) as string;
    e.target.value
      ? setEurTokrw(exchangeEurToKrw(Number(e.target.value)))
      : setEurTokrw(exchangeEurToKrw(0));
  };

  return { eurInfo, eurTokrw, exchangeUpDown, onChangeInputEur };
}
