import React from 'react';

type ExchangeRateProps = {
  basePrice: number;
  changePrice: number;
  openingPrice: number;
};

const ExchangeRate = ({
  basePrice,
  changePrice,
  openingPrice,
}: ExchangeRateProps) => {
  return (
    <div>
      {basePrice}
      {basePrice - openingPrice > 0 ? '▲' : '▼'}
      {changePrice}원 ({(changePrice / basePrice) * 100}
      %)
    </div>
  );
};

export default ExchangeRate;
