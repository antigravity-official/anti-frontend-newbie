import styled from "styled-components";

const InputDiv = styled.div<{ isInputFocus: boolean }>`
  width: fit-content;
  margin: 10px auto;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  border: ${({ isInputFocus }) =>
    isInputFocus ? "1px solid transparent" : "1px solid lightgray"};
  box-shadow: ${({ isInputFocus }) =>
    isInputFocus
      ? " rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;"
      : "none"};
  &:hover {
    border: ${({ isInputFocus }) =>
      isInputFocus ? "1px solid transparent" : "1px solid black"};
  }
`;

export default InputDiv;
