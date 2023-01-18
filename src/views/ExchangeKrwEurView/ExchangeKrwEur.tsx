import React, { useEffect, useState } from 'react';
import ExchangeEurInfos from '../EurInfosView/EurInfos';
import { KrwEurInfosTypes } from '../../interfaces/exchange';
import * as S from './ExchangeKrwEur.style';
import KrwEurViewModel from '../../viewModels/krwEurViewModel';

function ExchangeKrwEur({ props }: { props: KrwEurViewModel }) {
  const [isReady, setReady] = useState(false);
  const [krwEurInfo, setKrwEurInfo] = useState<KrwEurInfosTypes>();

  useEffect(() => {
    (async () => {
      const eurInfosToViewModel = await props.model.getEurInfos();
      setKrwEurInfo(eurInfosToViewModel);
      setReady(true);
    })();
    return () => {};
  }, []);

  if (!isReady) return null;
  if (!krwEurInfo) return null;
  return (
    <S.Container>
      <ExchangeEurInfos krwEurInfos={krwEurInfo} />
      <hr />
      <input /> 유로 ▶︎ <input disabled /> 원
    </S.Container>
  );
}

export default ExchangeKrwEur;
