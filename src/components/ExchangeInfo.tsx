import useEuroInfo from "../hooks/useEurInfo";
import styled from "styled-components";

interface isPositiveProp {
  isPositive: boolean;
}

export default function ExchangeInfo() {
  const { data: eurData } = useEuroInfo();

  return (
    <Container>
      <TopContainer>
        <TitleWrapper>환율기준 (1 유로)</TitleWrapper>
        {eurData && (
          <BasePriceContainer>
            <BasePriceWrapper>{eurData.basePrice}</BasePriceWrapper>
            <ChangedPriceWrapper
              isPositive={eurData.basePrice - eurData.openingPrice >= 0}
            >
              {eurData.basePrice - eurData.openingPrice > 0 && "▲"}
              {eurData.basePrice - eurData.openingPrice < 0 && "▼"}
              {eurData.changePrice}원 (
              {((eurData.changePrice / eurData.basePrice) * 100).toFixed(2)}%)
            </ChangedPriceWrapper>
          </BasePriceContainer>
        )}
      </TopContainer>
      <BottomContainer>
        <PriceContainer>
          <PriceWrapper>
            <LabelWrapper>살때</LabelWrapper>
            {eurData?.cashBuyingPrice}
          </PriceWrapper>
          <PriceWrapper>
            <LabelWrapper>팔때</LabelWrapper>
            {eurData?.cashSellingPrice}
          </PriceWrapper>
        </PriceContainer>
        <PriceContainer>
          <PriceWrapper>
            <LabelWrapper>보낼때</LabelWrapper>
            {eurData?.ttSellingPrice}
          </PriceWrapper>
          <PriceWrapper>
            <LabelWrapper>받을때</LabelWrapper>
            {eurData?.ttBuyingPrice}
          </PriceWrapper>
        </PriceContainer>
      </BottomContainer>
    </Container>
  );
}

const Container = styled.div`
  font-family: "Gowun Dodum", sans-serif;
`;

const TopContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  color: #2c394b;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const PriceContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const PriceWrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
`;

const LabelWrapper = styled.div`
  padding: 0.2rem 0.5rem;
  background-color: #2c394b;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

const BasePriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BasePriceWrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding-right: 1rem;
`;

const ChangedPriceWrapper = styled.div<isPositiveProp>`
  color: ${(props) => (props.isPositive ? "#ff0000" : "#0000ff")};
`;
