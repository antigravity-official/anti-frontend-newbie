import { useEffect } from "react";
import { getEurInfo, KrweurType } from "../helper/get-euro-info";
import Information from "../views/Information";
import LoadingSpinner from "../views/Loading-spinner";
import InputPrice from "../views/Input-price";

const EuroToKrwController = (props: {
  getReadyState: (readyState: boolean) => void;
  getEuroInfoState: (euroInfoState: KrweurType) => void;
  getEuroInputState: (euroInputState: number) => void;
  getExchangedWon: (exchangedWon: number) => void;
  isReady: boolean;
  eurInfo: KrweurType;
  inputedEuro: number;
  exchangedWon: number;
}) => {
  const {
    getReadyState,
    getEuroInfoState,
    getEuroInputState,
    getExchangedWon,
    isReady,
    eurInfo,
    inputedEuro,
    exchangedWon,
  } = props;

  useEffect(() => {
    getReadyState(true); // 시작전 로딩상태
    (async (): Promise<void> => {
      const fetchedData = await getEurInfo(); // 데이터 페칭
      getEuroInfoState(fetchedData); // 데이터 모델로 넘김
      getReadyState(false); // 끝나면 로딩 끝
    })();
    return () => {};
  }, []);

  const exchangeEuroToKrw = (euro: number) => {
    getEuroInputState(euro);
    getExchangedWon(euro * eurInfo.basePrice);
  };

  return (
    <div>
      {isReady && <LoadingSpinner />}
      <Information eurInfo={eurInfo} />
      <hr />

      <InputPrice
        exchangeEuroToKrw={exchangeEuroToKrw}
        inputedEuro={inputedEuro}
        exchangedWon={exchangedWon}
      />
    </div>
  );
};
export default EuroToKrwController;
