import { ExchangeRateInfo } from "../../model/ExchangeRateInfo";
import { getFormattedNumber } from "../../utils/Util";

interface ExchangeRateProps {
  country: { korName: string; enName: string };
  exchangeRateInfo: ExchangeRateInfo;
}

const ExchangeRate = ({ country, exchangeRateInfo }: ExchangeRateProps) => {
  const exchangePrice = {
    basePrice: getFormattedNumber(exchangeRateInfo.basePrice),
    changePrice: getFormattedNumber(exchangeRateInfo.changePrice),
    cashBuyingPrice: getFormattedNumber(exchangeRateInfo.cashBuyingPrice),
    cashSellingPrice: getFormattedNumber(exchangeRateInfo.cashSellingPrice),
    ttSellingPrice: getFormattedNumber(exchangeRateInfo.ttSellingPrice),
    ttBuyingPrice: getFormattedNumber(exchangeRateInfo.ttBuyingPrice),
  };
  return (
    <div className="exchange__container">
      <div className="exchange-title">환율기준 (1 {country.korName})</div>
      <div className="exchange-rate">
        {exchangePrice.basePrice}
        {exchangeRateInfo.isPriceUp() && "▲"}
        {exchangeRateInfo.isPriceDown() && "▼"}
        {exchangePrice.changePrice}원 ({exchangeRateInfo.getPriceRate()}%)
      </div>
      <div className="exchange-prices__container">
        <div className="exchange-price">살때 : {exchangePrice.cashBuyingPrice}원</div>
        <div className="exchange-price">팔때 : {exchangePrice.cashSellingPrice}원</div>
        <div className="exchange-price">보낼때 : {exchangePrice.ttSellingPrice}원</div>
        <div className="exchange-price">받을때 : {exchangePrice.ttBuyingPrice}원</div>
      </div>
    </div>
  );
};

export default ExchangeRate;
