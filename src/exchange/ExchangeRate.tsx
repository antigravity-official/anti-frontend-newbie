import { ExchangeRateInfo } from "../model/ExchangeRateInfo";

interface ExchangeRateProps {
  country: { korName: string; enName: string };
  exchangeRateInfo: ExchangeRateInfo;
}

const ExchangeRate = ({ country, exchangeRateInfo }: ExchangeRateProps) => {
  return (
    <div className="exchange__container">
      <div className="exchange-title">환율기준 (1 {country.korName})</div>
      <div className="exchange-rate">
        {exchangeRateInfo.basePrice}
        {exchangeRateInfo.basePrice - exchangeRateInfo.openingPrice > 0 && "▲"}
        {exchangeRateInfo.basePrice - exchangeRateInfo.openingPrice < 0 && "▼"}
        {exchangeRateInfo.changePrice}원 ({(exchangeRateInfo.changePrice / exchangeRateInfo.basePrice) * 100}
        %)
      </div>
      <div className="exchange-prices__container">
        <div className="exchange-price">살때 : {exchangeRateInfo.cashBuyingPrice}</div>
        <div className="exchange-price">팔때 : {exchangeRateInfo.cashSellingPrice}</div>
        <div className="exchange-price">보낼때 : {exchangeRateInfo.ttSellingPrice}</div>
        <div className="exchange-price">받을때 : {exchangeRateInfo.ttBuyingPrice}</div>
      </div>
    </div>
  );
};

export default ExchangeRate;
