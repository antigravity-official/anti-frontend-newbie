import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.B40};
  border-radius: 5px;
  padding: 8px 12px;
  margin: 0 15px;
  &:hover {
    border-color: ${({ theme }) => theme.colors.B80};
  }
  input {
    border: 0;
    outline: 0;
    margin-right: 5px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    &:disabled {
      background-color: transparent;
    }
  }
`;
