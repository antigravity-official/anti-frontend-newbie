import React from 'react';
import styled from 'styled-components';
import { EurStateType } from '../../types/types';

const ExchangeBoard = (props: { data: EurStateType }) => {
  const {
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = props.data;
  return (
    <BoardWrap>
      <BoardTitle>환율기준 (1 유로)</BoardTitle>
      <TodayExchange rate={basePrice - openingPrice}>
        {Math.round(basePrice).toLocaleString()}
        <span>{basePrice - openingPrice > 0 && '▲'}</span>
        <span>{basePrice - openingPrice < 0 && '▼'}</span>
        <span>{Math.round(changePrice)}</span>원 (
        <span> {((changePrice / basePrice) * 100).toFixed(2)}%)</span>
      </TodayExchange>
      <article>
        <div>살때 : {Math.round(cashBuyingPrice).toLocaleString()}원</div>
        <div>팔때 : {Math.round(cashSellingPrice).toLocaleString()}원</div>
        <div>보낼때 : {Math.round(ttSellingPrice).toLocaleString()}원</div>
        <div>받을때 : {Math.round(ttBuyingPrice).toLocaleString()}원</div>
      </article>
    </BoardWrap>
  );
};

export default ExchangeBoard;

const BoardWrap = styled.section`
  width: 400px;
  margin: 0 auto;
`;

const BoardTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const TodayExchange = styled.article<{ rate: number }>`
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 500;
  span {
    color: ${({ rate }) => (rate > 0 ? 'red' : 'blue')};
  }
`;
