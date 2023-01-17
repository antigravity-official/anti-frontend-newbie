import styled from "styled-components";

const ColorSpan = styled.span<{ isUp: boolean }>`
  font-size: 20px;
  color: ${({ isUp }) => (isUp ? "red" : "blue")};
`;

export default ColorSpan;
