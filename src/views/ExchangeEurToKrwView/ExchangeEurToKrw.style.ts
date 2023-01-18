import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 19px;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 4px;
  font-size: 19px;
  outline: none;
  background: #f1f1f1;
  border: none;
  border-radius: 4px;
`;

export const Arrow = styled.div`
  font-size: 19px;
  margin-left: 120px;
`;
export const CalcedValue = styled.div`
  padding: 4px;
  font-size: 19px;
  background: #f1f1f1;
  border-radius: 4px;
  border: none;
`;
