import { UseInputReturnType } from '@hooks/useInput';

import * as S from '@components/view/ExchangeEurToKrw/ExchangeEurToKrw.style';

interface ExchangeEurToKrwPropsType {
  changedKrw: number | string;
  euroInput: UseInputReturnType;
}

const ExchangeEurToKrw = ({
  changedKrw,
  euroInput: { inputValue, onChange },
}: ExchangeEurToKrwPropsType) => {
  return (
    <div>
      <S.InPut value={inputValue} onChange={onChange} />
      유로 ▶︎
      <S.InPut value={changedKrw} disabled /> 원
    </div>
  );
};

export default ExchangeEurToKrw;
