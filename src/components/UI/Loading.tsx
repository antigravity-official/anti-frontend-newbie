import React from 'react'
import styled, {keyframes} from 'styled-components';

function Loading() {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
	height: 100px;
	width: 100px;
	border: 1px solid #58cc65;
	border-radius: 50%;
	border-top: none;
	border-right: none;
	animation: ${rotation} 1s linear infinite;
`;