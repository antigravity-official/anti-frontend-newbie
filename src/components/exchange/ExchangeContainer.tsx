import React from "react";
import ExchangeView from "./ExchangeView";
import useExchangeController from "../../hooks/useExchangeController";
import Spinner from "../common/Spinner";
import ExchangeLoading from "./ExchangeLoading";

interface Props {}

const ExchangeContainer: React.FC<Props> = () => {
  const { eurInfo, exchangeEurToKrw, isLoading } = useExchangeController();

  // 퍼센트를 계산해주는 함수
  const getPercent = (changePrice?: number, basePrice?: number) => {
    if (!!changePrice && !!basePrice) {
      return `${(changePrice / basePrice) * 100}%`;
    }
    return "-";
  };

  // 화살표 방향을 결정해주는 함수
  const getArrowDirection = (basePrice?: number, openingPrice?: number) => {
    if (!!basePrice && !!openingPrice) {
      if (basePrice - openingPrice > 0) {
        return "▲";
      } else if (basePrice - openingPrice < 0) {
        return "▼";
      } else {
        return "-";
      }
    }
    return "-";
  };

  return (
    <Spinner isLoading={isLoading} loadingContent={<ExchangeLoading />}>
      <ExchangeView
        eurInfo={eurInfo}
        kwr={0}
        percent={getPercent(eurInfo?.changePrice, eurInfo?.basePrice)}
        arrowDirection={getArrowDirection(
          eurInfo?.basePrice,
          eurInfo?.openingPrice
        )}
      />
    </Spinner>
  );
};
export default ExchangeContainer;
