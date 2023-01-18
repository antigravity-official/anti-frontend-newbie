import { ChangeEvent, useState } from 'react';
import * as S from './ExchangeEurToKrw.style';
import { EurTypes, KrwTypes } from '../../interfaces/exchange';
import KrwEurViewModel from '../../viewModels/krwEurViewModel';
import Spinner from '../Spinner/Spinner';

function ExchangeEurToKrw({ props }: { props: KrwEurViewModel }) {
  const [loading, setLoading] = useState<boolean>(false);
  const [krwResult, setKrwResult] = useState<KrwTypes>();

  const handleInputEur = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const eurValue = e.target.value as unknown as EurTypes;
      if (!props.checkEur(eurValue)) alert('소숫점 2자리 까지 입력해주세요!');
      setKrwResult(props.calcEurToKrw(eurValue));
    } catch (e) {
      console.error((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.InputContainer>
        <S.Input type='number' onChange={handleInputEur} />
        <div>유로</div>
      </S.InputContainer>
      {loading ? <Spinner /> : <S.Arrow>▼</S.Arrow>}
      <S.InputContainer>
        <S.Input value={krwResult || ''} disabled />
        <div>원</div>
      </S.InputContainer>
    </S.Container>
  );
}

export default ExchangeEurToKrw;
