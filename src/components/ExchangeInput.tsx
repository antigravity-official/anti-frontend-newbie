import { useState } from 'react';

import TitleName from './common/TitleName';
import InputBox from './common/InputBox';
import Input from './common/Input';
import { decimalReturn, exchangeToMoney } from '../utils/moneyProcessing';

interface EuroInfo {
  basePrice: number;
}

interface ExchangeInputProps {
  eurInfo: EuroInfo;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const ExchangeInput = ({ eurInfo }: ExchangeInputProps) => {
  const [enterAmount, setEnterAmount] = useState<number>(0);
  const krw = exchangeToMoney(enterAmount, eurInfo.basePrice);

  const handleTextInputChange = (event: ChangeEvent) => {
    const float = parseFloat(event.target.value);

    setEnterAmount(Number(float.toFixed(2)));
  };

  return (
    <>
      <InputBox>
        <TitleName title={'유로'} />
        <Input
          type='number'
          value={enterAmount || ''}
          onChange={handleTextInputChange}
          placeholder='금액을 입력해주세요.'
        />
      </InputBox>
      <InputBox>
        <TitleName title={'원화'} />
        <Input
          disabled
          value={enterAmount ? `${krw}원` : ''}
          placeholder={`${decimalReturn(eurInfo.basePrice)}원`}
        />
      </InputBox>
    </>
  );
};

export default ExchangeInput;
