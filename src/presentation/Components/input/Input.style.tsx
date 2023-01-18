import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 10px 10px;
  border: 2px solid ${(props) => props.theme.palette["darkGray"]};
  outline-color: ${(props) => props.theme.palette["point"]};
  border-radius: 10px;
`;
