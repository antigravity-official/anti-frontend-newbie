import { useQuery } from "react-query";
import EurInfo from "../interfaces/EurInfo";
import { getEurInfo } from "../library/getEurInfo";
import ExchangeInfo from "./ExchangeInfo";
import ExchangeInput from "./ExchangeInput";

export default function Exchange() {
  const { data, isLoading, isError } = useQuery<EurInfo>(
    "eurInfo",
    getEurInfo,
    {
      refetchInterval: 3000,
    }
  );
  console.log(data);

  return (
    <div className="App">
      {data && (
        <div>
          <ExchangeInfo data={data} />
          <hr />
          <ExchangeInput data={data} />
        </div>
      )}
    </div>
  );
}
