import { useLayoutEffect, useState } from 'react';
import GlobalStyle from './styles/global.style';
import { getExchangeKrwEurInfosApi } from './apis/exchangeApi';
import ExchangeKrwEur from './views/ExchangeKrwEurSectionView/ExchangeKrwEurSection';
import KrwEurModel from './models/krwEurModel';
import KrwEurViewModel from './viewModels/krwEurViewModel';

export const App = () => {
  const [kwrEurViewModel, setKwrEurViewModel] = useState<KrwEurViewModel>();

  const setModel = async () => {
    const kwrEurInfos = await getExchangeKrwEurInfosApi();
    const kwrEurModel = new KrwEurModel(kwrEurInfos);
    setKwrEurViewModel(new KrwEurViewModel(kwrEurModel));
  };

  useLayoutEffect(() => {
    setModel();
  }, []);

  if (!kwrEurViewModel) return null;
  return (
    <div className='App'>
      <GlobalStyle />
      <ExchangeKrwEur props={kwrEurViewModel} />
    </div>
  );
};

export default App;
