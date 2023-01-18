import React from "react";
import { useEurInfo } from "../model/useEurInfo";
import { getCashTtInfoTextList, getEurStandardText } from "../utils/util";
import EurStandardInfo from "../view/EurStandardInfo";

const EuroInfoViewModel = () => {
  const { eurInfo } = useEurInfo();
  if (eurInfo === null) return null;
  else {
    const cashTtTextProps = getEurStandardText(eurInfo.basePrice, eurInfo.changePrice, eurInfo.openingPrice);
    return (
      <div>
        <EurStandardInfo eurStandard={cashTtTextProps} />
        {getCashTtInfoTextList(eurInfo)}
      </div>
    );
  }
};

export default EuroInfoViewModel;
