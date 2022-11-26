import EurInfo from './components/EurInfo';
import ExchangeInput from './components/ExchangeInput';
import Model from './Model/Model';
import ViewModel from './ViewModel/ViewModel';
import { useState } from 'react';
import { useEurInfo } from './hooks/useEurInfo';
import styled from '@emotion/styled';

export const App = () => {
  const { eurInfo, error } = useEurInfo();
  const [eur, setEur] = useState<string | undefined>('');
  const [krw, setKrw] = useState<string | undefined>('');

  const model = new Model(eurInfo, eur!, setEur, krw!, setKrw);
  const viewModel = new ViewModel(model);

  if (error)
    return (
      <div>
        <h1>데이터 요청에 실패하였습니다. 잠시후 다시 시도해주세요.</h1>
      </div>
    );
  return (
    <Container>
      <EurInfo viewModel={viewModel} />
      <ExchangeInput viewModel={viewModel} />
    </Container>
  );
};

export default App;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
