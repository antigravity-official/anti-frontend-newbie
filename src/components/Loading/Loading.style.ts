import styled, { css } from 'styled-components';

import { ColorsType } from '@styles/theme';

export interface AnimationPropsType {
  color: ColorsType;
  size: number;
}

export const Wrapper = styled.div<{ height: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${({ height }) => height || '100%'};
`;

export const Animation = styled.div<AnimationPropsType>`
  ${({ theme: { colors }, color, size }) => css`
    margin: 0 auto;
    border: solid 6px;
    border-radius: 50%;
    border-color: ${colors[color]} transparent transparent transparent;
    width: ${size}px;
    height: ${size}px;
    animation: spin 1s infinite linear;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `}
`;
