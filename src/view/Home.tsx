import { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import { HomeProp } from "../types/HomeProp";

const Home = ({ viewModel }: HomeProp) => {
  const [eur, setEur] = useState("1");

  return (
    <Container>
      <h2>환율</h2>
      <span>( 1유로 기준 )</span>
      <div>
        <b>
          <span>{viewModel.getBasePrice()}</span>
          <span>{viewModel.getIconForOpeningPriceComparison()}</span>
          <span>{viewModel.getChangePrice()}원</span>
          <span>({viewModel.getChangeRate().toFixed(3)}%)</span>
        </b>
      </div>
      {viewModel
        .getBuyingAndSellingPriceGroup()
        .map((item: { name: string; price: number }) => (
          <PriceGroup key={item.price}>
            {item.name} : {item.price}
          </PriceGroup>
        ))}
      <TextInput
        type='text'
        setValue={setEur}
        value={viewModel.getToLocaleString(eur)}
        name='유로'
      />
      =
      <TextInput
        type='text'
        value={viewModel.getExchangeEurToKrw(eur, 0)}
        name='원'
        disabled
        readOnly
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 4rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  text-align: center;

  h2 {
    display: inline-block;
    padding-right: 1rem;
  }

  & > div:nth-child(3) {
    margin-bottom: 0.4rem;

    span {
      font-size: 1.1rem;
      padding: 0.2rem;
    }
  }
`;
const PriceGroup = styled.div`
  padding: 0.2rem;
`;
export default Home;
