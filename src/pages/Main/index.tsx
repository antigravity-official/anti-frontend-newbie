import { useEffect } from 'react';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';

import Exchanged from '@components/view-modal/Exchanged';
import Referenced from '@components/view-modal/Referenced';
import Loading from '@components/Loading';
import TitleHeader from '@components/TitleHeader';

import { euroInfoData, getEuroInfo } from '@model/exchangeRateInfo';

import * as S from '@pages/Main/Main.style';

const MainPage = () => {
  const { state: requestState, contents: euroInfo } =
    useRecoilValueLoadable(getEuroInfo);
  const [euroInfoState, setEuroInfoState] = useRecoilState(euroInfoData);

  useEffect(() => {
    setEuroInfoState(euroInfo);
  }, [euroInfo]);

  const showView = (requestState: 'hasValue' | 'loading' | 'hasError') => {
    switch (requestState) {
      case 'hasValue':
        return (
          <div>
            <Referenced />
            <Exchanged />
          </div>
        );
      case 'loading':
        return (
          <div>
            <Loading color={'black'} size={42} height='100%' />
          </div>
        );
      case 'hasError':
        return <div>환율 정보를 불러올 수 없습니다</div>;
    }
  };

  return (
    <S.Wrapper>
      <TitleHeader />
      {euroInfoState.length && showView(requestState)}
    </S.Wrapper>
  );
};
export default MainPage;
