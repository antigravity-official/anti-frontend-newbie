import ViewModel from '../ViewModel/ViewModel';
import { Flex } from '../styles/common';
import styled from '@emotion/styled';

interface Props {
  viewModel: ViewModel;
}

const ExchangeInput = ({ viewModel }: Props) => {
  const { eurInfo, eur, krw } = viewModel.getAllEurInfo();

  return (
    <Flex
      margin='20px 0px 0px 0px'
      padding='20px'
      direction='column'
      border='1px solid white'
      justify='center'
    >
      <Flex>
        <span>유로</span>
        <Input
          data-testid='eurInput'
          type={'number'}
          placeholder='유로 1'
          onChange={(e) => {
            viewModel.onChange(e.target.value, eurInfo.basePrice);
          }}
          value={eur}
        />
      </Flex>
      <Flex direction='flex'>
        <span>한화</span>
        <Input
          data-testid='krwInput'
          placeholder={`${eurInfo.basePrice}원`}
          value={krw}
          disabled
        />
      </Flex>
      <Footer>
        <input readOnly checked type={'radio'} />
        하나은행
      </Footer>
    </Flex>
  );
};

export default ExchangeInput;

const Input = styled.input`
  height: 35px;
  background-color: #202124;
  color: white;
  font-size: 18px;
  padding-left: 25px;
  outline: none;
  border: 1px solid #a4a7ac;
  border-radius: 6px;
`;

const Footer = styled.div`
  color: #00df9a;
  font-size: 13px;
  text-align: end;
  width: 100%;
  margin-top: 15px;
`;
