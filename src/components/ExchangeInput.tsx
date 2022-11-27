import { useState } from 'react';

import TitleName from './common/TitleName';
import InputBox from './common/InputBox';
import Input from './common/Input';

interface EuroInfo {
  basePrice: number;
}

interface ExchangeInputProps {
  eurInfo: EuroInfo;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const ExchangeInput = ({ eurInfo }: ExchangeInputProps) => {
  const [enterAmount, setEnterAmount] = useState<number>(0);
  const exchangeEurToKrw = (krw: number): number => krw * eurInfo.basePrice;
  const exchangeToMoney = Math.floor(exchangeEurToKrw(enterAmount))
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

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
        />
      </InputBox>
      <InputBox>
        <TitleName title={'원화'} />
        <Input disabled value={enterAmount ? exchangeToMoney : ''} />
      </InputBox>
    </>
  );
};

export default ExchangeInput;
