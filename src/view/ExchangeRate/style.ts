import styled from "styled-components";

export const ExChangeRateContainer = styled.div`
  font-weight: bold;
`;

export const ExChangeRatetitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
  padding: 10px;
`;

export const ExChangeRatePrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
  font-size: 12px;
`;

export const ExChangePercentage = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  margin-right: 15px;
`;

export const ExChangeGrid = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
`;
