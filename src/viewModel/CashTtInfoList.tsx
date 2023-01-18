import React from "react";
import { EurInfo } from "../interfaces/eur";
import { getCashTtInfoTextList } from "../utils/util";
import List from "../view/List";

const CashTtInfoList = ({ eurInfo }: { eurInfo: EurInfo }) => {
  const cashTtInfoList = getCashTtInfoTextList(eurInfo);
  return <List infoArray={cashTtInfoList} />;
};

export default CashTtInfoList;
