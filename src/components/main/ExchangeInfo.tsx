import React from 'react';
import { EurInfoTypes } from '../../types/eurInfo';

type Props = Pick<
  EurInfoTypes,
  'cashBuyingPrice' | 'cashSellingPrice' | 'ttSellingPrice' | 'ttBuyingPrice'
>;

const ExchangeInfo = (props: Props) => {
  const { cashBuyingPrice, cashSellingPrice, ttSellingPrice, ttBuyingPrice } =
    props;

  return (
    <div>
      <div>살때 : {cashBuyingPrice}</div>
      <div>팔때 : {cashSellingPrice}</div>
      <div>보낼때 : {ttSellingPrice}</div>
      <div>받을때 : {ttBuyingPrice}</div>
    </div>
  );
};

export default ExchangeInfo;
