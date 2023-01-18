import React from 'react';
import styled from 'styled-components';
import { MdRefresh } from 'react-icons/md';
import BasicCard from '../BasicCard';
import Timer from './Timer';

const TitleWrap = styled.section`
  display: flex;
  gap: 0.75rem;
  @media screen and (max-width: 850px) {
    position: absolute;
    top: 0;
  }
`;

const DefaultMargin = styled.div`
  margin-left: 1.25rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  font-size: 2rem;
`;

const TitleCard = () => {
  const onClickRefresh = (e: any) => {
    window.location.reload();
  };
  return (
    <TitleWrap>
      <BasicCard width={16} height={5}>
        <DefaultMargin>
          <Title>EUR ▶ KWR</Title>
          <Timer />
        </DefaultMargin>
      </BasicCard>
      <BasicCard width={5} height={5}>
        <IconWrap>
          <MdRefresh onClick={onClickRefresh} style={{ cursor: 'pointer' }} />
        </IconWrap>
      </BasicCard>
    </TitleWrap>
  );
};

export default TitleCard;
