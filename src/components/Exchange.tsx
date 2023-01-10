import ExchangeInfo from "./ExchangeInfo";
import ExchangeInput from "./ExchangeInput";
import styled from "styled-components";

export default function Exchange() {
  return (
    <Container>
      <ExchangeWrapper>
        <ExchangeInfo />
        <ExchangeInput />
      </ExchangeWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`;

const ExchangeWrapper = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #aaaaaa;
  border-radius: 1rem;
`;
