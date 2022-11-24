import "../src/styles/globals.css";
import Loading from "./components/common/Loading";
import EurInfoContainer from "./components/EurInfoContainer";
import ExchangeInput from "./components/ExchangeInput";
import { useFetch } from "./hooks/useFetch";
import { exchangeViewModel } from "./viewModel/exchangeViewModel";

export const App = () => {
  const { isReady, eurInfo } = useFetch();

  const priceDetail = new exchangeViewModel(eurInfo);
  return (
    <main>
      <article>
        {!isReady || !eurInfo ? (
          <Loading />
        ) : (
          <>
            <EurInfoContainer priceDetail={priceDetail} />
            <hr />
            <ExchangeInput basePrice={eurInfo.basePrice} />
          </>
        )}
      </article>
    </main>
  );
};

export default App;
