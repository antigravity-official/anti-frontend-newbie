import styled from 'styled-components';
import Calculator from './components/Calculator/Calculator';
import ExchangeBoard from './components/ExchageBoard/ExchageBoard';
import Loading from './components/Loading/Loading';
import useExchange from './hooks/useExchage';
import useGetData from './hooks/useGetData';

export const App = () => {
  const { isReady, eurInfo } = useGetData();

  const { eurToKrw, exchangeEurToKrw } = useExchange();

  if (!isReady) return <Loading />;
  return (
    <Wrap>
      <ExchangeBoard data={eurInfo} />
      <Calculator
        exchange={exchangeEurToKrw}
        eurToKrw={eurToKrw}
        basePrice={eurInfo.basePrice}
      />
    </Wrap>
  );
};

export default App;

const Wrap = styled.div`
  width: ${({ theme }) => theme.small};
  height: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 2px solid black;
`;
