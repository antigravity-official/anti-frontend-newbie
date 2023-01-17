import React from "react";
import ExchangeView from "./ExchangeView";
import useExchangeController from "../../hooks/useExchangeController";
import Loading from "../common/Loading";
import ExchangeLoading from "./ExchangeLoading";

interface Props {}

const ExchangeContainer: React.FC<Props> = () => {
  const { eurInfo, exchangeEurToKrw, isLoading } = useExchangeController();

  return (
    <Loading isLoading={isLoading} loadingContent={<ExchangeLoading />}>
      <ExchangeView eurInfo={eurInfo} exchangeEurToKrw={exchangeEurToKrw} />
    </Loading>
  );
};
export default ExchangeContainer;
