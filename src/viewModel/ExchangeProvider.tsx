import Home from "../pages/Home";
import { useExchangeViewModel } from "./ExchangeViewModel";

const ExchangeProvider = () => {
  const ExchangeViewModel = useExchangeViewModel();
  return <Home {...ExchangeViewModel} />;
};

export default ExchangeProvider;
