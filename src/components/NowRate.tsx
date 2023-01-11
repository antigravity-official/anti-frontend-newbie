import { priceInformation } from "../App";
import styled from "styled-components";

function nowRate({ eurInfo }: { eurInfo: priceInformation }) {
  return (
    <NowRate>
      {eurInfo ? eurInfo.basePrice : ""}&nbsp;
      {eurInfo ? eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲" : ""}&nbsp;
      {eurInfo ? eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼" : ""}&nbsp;
      {eurInfo ? eurInfo.changePrice : ""}원 ( &nbsp;
      {eurInfo
        ? ((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)
        : ""}
      &nbsp;)
    </NowRate>
  );
}

const NowRate = styled.div`
  margin-left: 15px;
`;

export default nowRate;
