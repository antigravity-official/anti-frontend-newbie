import ExchangeInfo from "./ExchangeInfo";
import ExchangeInput from "./ExchangeInput";

export default function Exchange() {
  return (
    <div className="App">
      <div>
        <ExchangeInfo />
        <hr />
        <ExchangeInput />
      </div>
    </div>
  );
}
