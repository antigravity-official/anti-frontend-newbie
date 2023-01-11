import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 16px;
`;

export const Text = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  padding: 8px;
`;
