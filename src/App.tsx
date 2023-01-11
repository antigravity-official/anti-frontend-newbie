import useFetch from './hooks/useFetch';
import ExchangeData from './component/ExchangeData';
import ExchangeRate from './component/ExchangeRate';

export const App = () => {
  const { isLoading, currencyInfo } = useFetch();

  if (isLoading) return null;

  return (
    <>
      {currencyInfo && (
        <div className="App">
          <ExchangeData currencyInfo={currencyInfo} />
          <ExchangeRate currencyInfo={currencyInfo} />
        </div>
      )}
    </>
  );
};

export default App;
