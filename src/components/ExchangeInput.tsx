import useInput from '../hooks/use-input';
import { EurInfoTypes } from '../types/eur-info.type';

const ExchangeInput = ({ eurInfo }: { eurInfo: EurInfoTypes }) => {
  const { eur, krw, changeHandler } = useInput(eurInfo);

  return (
    <div>
      <input type="number" value={eur} onChange={changeHandler} /> 유로 ▶︎
      <input type="text" disabled value={krw || 0} />원
    </div>
  );
};

export default ExchangeInput;
