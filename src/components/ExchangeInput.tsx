import useInput from "../hooks/useInput";
import styled from "styled-components";

export default function ExchangeInput() {
  const [value, onChangeInputText, exchangedKrw] = useInput();

  return (
    <Container>
      <input type="number" value={value} onChange={onChangeInputText} /> 유로 ▶︎{" "}
      <input value={exchangedKrw?.toLocaleString()} disabled /> 원
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  input:focus {
    outline: none;
  }
`;
