import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 20px;
`;

export const ErrorMessage = styled.span`
  margin: 16px;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
`;
