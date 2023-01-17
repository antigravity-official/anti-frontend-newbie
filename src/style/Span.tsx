import styled from "styled-components";

const Span = styled.span<{ size: number }>`
  font-size: ${({ size }) => size + "px"};
`;

export default Span;
