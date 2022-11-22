import { ViewModelProps } from "../@types/ViewModelProps";
import Loading from "../components/common/Loading";
import EurInfoContainer from "../components/Home/EurInfoContainer";
import ExchangeInput from "../components/Home/ExchangeInput";

export const Home = (props: ViewModelProps) => {
  const { isReady, eurInfo } = props;
  return (
    <main>
      <article>
        {!isReady || !eurInfo ? <Loading /> : <EurInfoContainer {...eurInfo} />}
        <hr />
        <ExchangeInput {...props} />
      </article>
    </main>
  );
};

export default Home;
