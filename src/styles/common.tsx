import styled from '@emotion/styled';

interface StyleProps {
  direction?: string;
  border?: string;
  margin?: string;
  padding?: string;
  justify?: string;
}

export const Flex = styled.div<StyleProps>`
  display: flex;
  justify-content: ${(props) => props.justify || 'center'};
  align-items: center;
  flex-direction: ${(props) => props.direction};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  gap: 20px;
  color: white;
  border-radius: 6px;
  background-color: #202124;
`;
