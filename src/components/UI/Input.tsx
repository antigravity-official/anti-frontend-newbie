import React from 'react'
import styled from 'styled-components';

function Result({input, handleChange}: {input: string, handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  
  return (
    <Wrapper>
      <Label htmlFor="유로">EUR</Label>
      <Input id="유로"onChange={handleChange} placeholder='0' type="text" value={input} />
    </Wrapper>

  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`

const Label = styled.label`
  font-size: 25px;
  font-weight: 600;
`

const Input = styled.input`
  font-size: 20px;
  height: 20px;
`

export default Result