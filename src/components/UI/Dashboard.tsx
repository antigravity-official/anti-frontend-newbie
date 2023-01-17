import React from 'react';
import { TDashBoard } from '../../types';
import styled from 'styled-components';

function DashBoard({
  openingPrice,
  basePrice,
  changePrice,
  cashBuyingPrice,
  cashSellingPrice,
  ttSellingPrice,
  ttBuyingPrice,
}: TDashBoard) {
  return (
    <Wrapper>
      <h1>환율기준 (1 유로)</h1>
      <h2>
        {basePrice.toLocaleString('ko-KR')}
        {basePrice - openingPrice > 0 && '▲'}
        {basePrice - openingPrice < 0 && '▼'}
        {changePrice.toLocaleString('ko-KR')}원 ({((changePrice / basePrice) * 100).toFixed(2)}%)
      </h2>
      <ListWrapper>
        <li>살때 : {cashBuyingPrice.toLocaleString('ko-KR')}</li>
        <li>팔때 : {Number(cashSellingPrice).toLocaleString('ko-KR')}</li>
        <li>보낼때 : {ttSellingPrice.toLocaleString('ko-KR')}</li>
        <li>받을때 : {ttBuyingPrice.toLocaleString('ko-KR')}</li>
      </ListWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`

`

const ListWrapper = styled.ul`
  height: 200px;
  font-size: 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;

`

export default DashBoard;
