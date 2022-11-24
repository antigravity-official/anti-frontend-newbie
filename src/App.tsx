import EurInfo from './components/EurInfo';
import ExchangeInput from './components/ExchangeInput';
import Model from './Model/Model';
import ViewModel from './ViewModel/ViewModel';
import { useState } from 'react';
import { useEruInfo } from './hooks/useEurInfo';

export const App = () => {
  const { eurInfo, error } = useEruInfo();
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
    <>
      <EurInfo viewModel={viewModel} />
      <ExchangeInput viewModel={viewModel} />
    </>
  );
};

export default App;
