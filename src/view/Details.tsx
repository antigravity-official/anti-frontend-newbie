import { TodayExchangeRateDetails } from "../type/index";
import { useDetails } from "./viewModels/useDetails";

const textDummy = ["살때", "팔때", "보낼떄", "받을 떄"];

export default function Details({ ...props }: TodayExchangeRateDetails) {
  const { removeKrwDecimalPoints } = useDetails(props);

  return (
    <ul>
      {textDummy.map((text, index) => (
        <li key={`${text}-${index}`}>
          {text} : {removeKrwDecimalPoints[index]}원
        </li>
      ))}
    </ul>
  );
}
