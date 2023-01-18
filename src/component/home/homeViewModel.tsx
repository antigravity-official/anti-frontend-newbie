import HomeView from "./view/home";
import { ChangeEvent, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { PointValidation } from "../../lib/validation";
import { EurInfoAtom, EurInfoSelector } from "../../store/eurInfo";

export default function HomeViewModel() {
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

  return (
    <HomeView
      eurInfo={eurInfo}
      eurTokrw={eurTokrw}
      exchangeUpDown={exchangeUpDown}
      onChangeInputEur={onChangeInputEur}
    />
  );
}
