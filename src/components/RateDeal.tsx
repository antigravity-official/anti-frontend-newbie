import { priceInformation } from "../App";
import styled from "styled-components";

function rateDeal({ eurInfo }: { eurInfo: priceInformation }) {
  return (
    <RateSpace>
      <RateContents>
        살때 : {eurInfo ? eurInfo.cashBuyingPrice : ""}
      </RateContents>
      <RateContents>
        팔때 : {eurInfo ? eurInfo.cashSellingPrice : ""}
      </RateContents>
      <RateContents>
        보낼때 : {eurInfo ? eurInfo.ttSellingPrice : ""}
      </RateContents>
      <RateContents>
        받을때 : {eurInfo ? eurInfo.ttBuyingPrice : ""}
      </RateContents>
    </RateSpace>
  );
}
const RateSpace = styled.div`
  width: 100%;
  height: 100%;
`;

const RateContents = styled.div`
  margin: 10px 0px;
  font-weight: 500;
`;

export default rateDeal;
