import { ExchangedPrices as ExchangedPricesProps } from '../../types/eur';
import { removeDecimalPointToPrices } from './utils';

const ExchangedPrices = ({ ...exchangedPrices }: ExchangedPricesProps) => {
  const { cashBuyingPrice, cashSellingPrice, ttSellingPrice, ttBuyingPrice } =
    removeDecimalPointToPrices(exchangedPrices);

  return (
    <div>
      <div>살때 : {cashBuyingPrice.toLocaleString()}원</div>
      <div>팔때 : {cashSellingPrice.toLocaleString()}원</div>
      <div>보낼때 : {ttSellingPrice.toLocaleString()}원</div>
      <div>받을때 : {ttBuyingPrice.toLocaleString()}원</div>
    </div>
  );
};

export default ExchangedPrices;
