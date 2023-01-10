import './App.css';
import ExchangeInfo from './components/ExchangeInfo';
import ExchangeInput from './components/ExchangeInput';
import ExchangeRate from './components/ExchangeRate';
import useFetchExchange from './hooks/use-fetch-exchange';

export const App = () => {
  const { isReady, eurInfo } = useFetchExchange();

  if (!isReady) return <p>Exchange Info Loading...</p>;

  return (
    <section>
      {eurInfo && (
        <>
          <ExchangeRate eurInfo={eurInfo} />
          <ExchangeInfo eurInfo={eurInfo} />
          <hr />
          <ExchangeInput eurInfo={eurInfo} />
        </>
      )}
    </section>
  );
};

export default App;
