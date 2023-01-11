import useInput from "../hooks/useInput";
import styled from "styled-components";

export default function ExchangeInput() {
  const [value, onChangeInputText, exchangedPrice] = useInput();

  return (
    <Container>
      <input type="number" value={value} onChange={onChangeInputText} /> 유로 ▶︎
      <input value={exchangedPrice?.toLocaleString()} disabled /> 원
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  width: 100%;
  input {
    margin: 0 0.5rem;
    width: 30%;
  }
  input:focus {
    outline: none;
  }
`;
