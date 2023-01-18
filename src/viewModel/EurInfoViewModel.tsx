import React from "react";
import { useEurInfo } from "../model/useEurInfo";
import { getCashTtInfoTextList, getEurStandardText } from "../utils/util";
import List from "../view/List";
import EurStandardInfo from "../view/EurStandardInfo";

const EuroInfoViewModel = () => {
  const { eurInfo } = useEurInfo();
  if (eurInfo === null) return null;
  else {
    const cashTtTextProps = getEurStandardText(eurInfo.basePrice, eurInfo.changePrice, eurInfo.openingPrice);
    const cashTtInfoList = getCashTtInfoTextList(eurInfo);
    return (
      <div>
        <EurStandardInfo eurStandard={cashTtTextProps} />
        <List infoArray={cashTtInfoList} />
      </div>
    );
  }
};

export default EuroInfoViewModel;
