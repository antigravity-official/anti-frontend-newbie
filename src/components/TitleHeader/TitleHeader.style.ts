import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme: { fontSize } }) => fontSize.title};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;
