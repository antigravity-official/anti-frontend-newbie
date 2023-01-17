import HomeView from "./view/home";
import { useRecoilValue } from "recoil";
import { ChangeEvent, useState } from "react";
import { useGetEurInfo } from "../../api/getEurInfo";
import { EurInfoSelector } from "../../store/eurInfo";
import { PointValidation } from "../../lib/validation";

export default function HomeViewModel() {
  const eurInfo = useGetEurInfo();
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
