import styled from "styled-components";

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid lightgray;
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    outline-color: #3686e8bc;
  }
`;

export default Input;
