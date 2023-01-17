import { Fragment } from "react";
import Container from "./style/Container";
import Loading from "./components/Loading";
import ChangePrice from "./components/ChangePrice";
import CalcEurForm from "./components/CalcEurForm";
import { useIsReady } from "./data-access/hooks/useIsReady";
import { useEurInfo } from "./data-access/hooks/useEurInfo";
import DisplayPrice from "./components/DisplayPrice";

export const App = () => {
  const eurInfo = useEurInfo();
  const isReady = useIsReady();

  return (
    <Container>
      <h2>환율기준 (1 유로)</h2>
      {isReady ? (
        <Fragment>
          <ChangePrice />
          <div>
            <DisplayPrice
              prefix="살때 : "
              price={eurInfo.cashBuyingPrice}
              suffix="원"
            />
            <DisplayPrice
              prefix="팔때 : "
              price={eurInfo.cashSellingPrice}
              suffix="원"
            />
            <DisplayPrice
              prefix="보낼때 : "
              price={eurInfo.ttSellingPrice}
              suffix="원"
            />
            <DisplayPrice
              prefix="받을때 : "
              price={eurInfo.ttBuyingPrice}
              suffix="원"
            />
          </div>
        </Fragment>
      ) : (
        <Loading />
      )}
      <CalcEurForm />
    </Container>
  );
};

export default App;
