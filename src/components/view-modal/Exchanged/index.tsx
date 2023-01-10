import { useRecoilValue } from 'recoil';

import ExchangeEurToKrw from '@components/view/ExchangeEurToKrw';

import useInput from '@hooks/useInput';
import { euroInfoData } from '@model/exchangeRateInfo';
import { ExchangeRateType } from '@type/exchangeRate';
import { priceStringFormat } from '@utils/priceFormatting';

const Exchanged = () => {
  const { basePrice } = useRecoilValue<ExchangeRateType[]>(euroInfoData)[0];
  const euroInput = useInput(0);

  const exchangeEurToKrw = (basePrice: number): number | string => {
    if (!euroInput.inputValue) return 0;
    return priceStringFormat(Math.floor(euroInput.inputValue * basePrice));
  };

  return (
    <div>
      <ExchangeEurToKrw
        changedKrw={exchangeEurToKrw(basePrice)}
        euroInput={euroInput}
      />
    </div>
  );
};

export default Exchanged;
