import { useEffect, useState } from "react";
import { CurrencyCode, CURRENCY_FORMAT } from "../../../model/currency";
import { ExchangeInfo } from "../../../model/exchange";
import LoadingMessage from "../../atom/LoadingMessage";
import ExchangeInfoBox from "../../organism/ExchangeInfoBox";

interface Props {
  getExchangeInfo: () => Promise<ExchangeInfo>;
  fromCurrencyCode: CurrencyCode;
  toCurrencyCode: CurrencyCode;
}

type ExchangeInfoState = ExchangeInfo | undefined;

const ExchangeInfoPage = ({
  getExchangeInfo,
  fromCurrencyCode,
  toCurrencyCode,
}: Props) => {
  const [exchangeInfo, setExchangeInfo] =
    useState<ExchangeInfoState>(undefined);

  useEffect(() => {
    getExchangeInfo().then((value) => {
      setExchangeInfo(value);
    });

    return () => {};
  }, [getExchangeInfo]);

  if (!exchangeInfo) return <LoadingMessage message="환율 정보 로딩 중" />;

  return (
    <>
      <ExchangeInfoBox
        exchangeInfo={exchangeInfo}
        fromCurrencyFormat={CURRENCY_FORMAT[fromCurrencyCode]}
        toCurrencyFormat={CURRENCY_FORMAT[toCurrencyCode]}
      />
    </>
  );
};

export default ExchangeInfoPage;
