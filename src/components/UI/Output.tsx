import styled from 'styled-components';

function Output({value}: {value:string}) {

  return (
    <Wrapper>
      <Label htmlFor="한화">KRW</Label>
      <Input id="한화"disabled type="text" value={value} />
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

export default Output