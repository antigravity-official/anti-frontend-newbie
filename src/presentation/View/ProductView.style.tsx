import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.palette["background"]};
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette["white"]};
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.11), 0 10px 10px rgba(0, 0, 0, 0.11);
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
`;

export const ExchangeRateBox = styled.div`
  text-align: center;
  margin: 40px 0;
`;

export const ExchangeRateNumber = styled.p`
  font-size: 42px;
  font-weight: 700;
`;

export const ExchangeRateText = styled.small`
  display: block;
  color: ${(props) => props.theme.palette["darkGray"]};
  font-weight: 500;
  margin-top: 8px;
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  margin-bottom: 5px;
`;

export const HeaderSubtitle = styled.small`
  text-align: center;
  font-weight: 600;
`;

export const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  font-weight: 600;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${(props) => props.theme.palette["white"]};
`;

export const ItemTitle = styled.p``;

export const ItemPrice = styled.strong`
  font-size: 16px;
  color: ${(props) => props.theme.palette["point"]};
`;

export const NumberBox = styled.div`
  margin: 20px 0;

  /* flex-direction: column; */
`;

export const NumberBoxTitle = styled.p`
  margin-bottom: 5px;
  font-weight: 600;
`;
