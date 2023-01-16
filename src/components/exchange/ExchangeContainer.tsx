import React from "react";
import ExchangeView from "./ExchangeView";
import useExchangeController from "../../hooks/useExchangeController";

interface Props {}

const ExchangeContainer: React.FC<Props> = () => {
  const { eurInfo } = useExchangeController();

  return <ExchangeView eurInfo={eurInfo} />;
};
export default ExchangeContainer;
