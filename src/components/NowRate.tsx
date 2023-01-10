// import React, { Suspense } from "react";
// import { priceInformation } from "../App";

// export const NowRate = ({ eurInfo }: { eurInfo: priceInformation }) => {
//   return (
//     <div>
//       {eurInfo ? eurInfo.basePrice : ""}
//       {eurInfo ? eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲" : ""}
//       {eurInfo ? eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼" : ""}
//       {eurInfo ? eurInfo.changePrice : ""}원 (
//       {eurInfo
//         ? ((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)
//         : ""}
//       %)
//     </div>
//   );
// };
import React from "react";
import { priceInformation } from "../App";

function nowRate({ eurInfo }: { eurInfo: priceInformation }) {
  return (
    <div>
      {eurInfo ? eurInfo.basePrice : ""}
      {eurInfo ? eurInfo.basePrice - eurInfo.openingPrice > 0 && "▲" : ""}
      {eurInfo ? eurInfo.basePrice - eurInfo.openingPrice < 0 && "▼" : ""}
      {eurInfo ? eurInfo.changePrice : ""}원 (
      {eurInfo
        ? ((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)
        : ""}
    </div>
  );
}

export default nowRate;
