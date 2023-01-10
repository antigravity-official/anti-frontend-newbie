import styled from 'styled-components';

export const InPut = styled.input`
  width: 150px;
  height: 30px;
  margin: 6px;
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
`;
