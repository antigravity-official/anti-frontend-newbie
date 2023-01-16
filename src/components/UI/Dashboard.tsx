import React from 'react';
import { TDashBoard } from '../../types';

function DashBoard({
  openingPrice,
  basePrice,
  changePrice,
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: TDashBoard) {
  console.log('Dash')
  return (
    <>
      <div>환율기준 (1 유로)</div>
      <div>
        {basePrice.toLocaleString('ko-KR')}
        {basePrice - openingPrice > 0 && '▲'}
        {basePrice - openingPrice < 0 && '▼'}
        {changePrice.toLocaleString('ko-KR')}원 ({((changePrice / basePrice) * 100).toFixed(2)}%)
      </div>
      <div>
        <div>살때 : {cashBuyingPrice.toLocaleString('ko-KR')}</div>
        <div>팔때 : {Number(cashSellingPrice).toLocaleString('ko-KR')}</div>
        <div>보낼때 : {ttSellingPrice.toLocaleString('ko-KR')}</div>
        <div>받을때 : {ttBuyingPrice.toLocaleString('ko-KR')}</div>
      </div>
    </>
  );
}

export default DashBoard;
