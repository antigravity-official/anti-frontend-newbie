import React, { useEffect, useState } from 'react';
import * as S from './ExchangeKrwEurSection.style';
import { KrwEurInfosTypes } from '../../interfaces/exchange';
import ExchangeEurInfos from '../EurInfosView/EurInfos';
import KrwEurViewModel from '../../viewModels/krwEurViewModel';
import ExchangeEurToKrw from '../ExchangeEurToKrwView/ExchangeEurToKrw';

function ExchangeKrwEur({ props }: { props: KrwEurViewModel }) {
  const [krwEurInfo, setKrwEurInfo] = useState<KrwEurInfosTypes>();

  useEffect(() => {
    const eurInfosToViewModel = props.model.getEurInfos();
    setKrwEurInfo(eurInfosToViewModel);
  }, []);

  if (!krwEurInfo) return null;
  return (
    <S.Container>
      <ExchangeEurInfos krwEurInfos={krwEurInfo} />
      <ExchangeEurToKrw props={props} />
    </S.Container>
  );
}

export default ExchangeKrwEur;
