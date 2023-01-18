import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ParamProps {
  flag: ReactNode;
  CountryKor: string;
  CountryEng: string;
}

const Wrap = styled.div`
  display: flex;
`;

const Flag = styled.div`
  margin-right: 0.5rem;
`;

const CountryEngName = styled.em`
  color: #b9bac1;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CountryInfo = ({ flag, CountryKor, CountryEng }: ParamProps) => {
  return (
    <>
      <Wrap>
        <Flag>{flag}</Flag>
        <p>{CountryKor}</p>
      </Wrap>
      <CountryEngName>{CountryEng}</CountryEngName>
    </>
  );
};

export default CountryInfo;
