import React from "react";
import { EurInfo } from "../interfaces/euro";
import { getCashTtInfoTextList } from "../utils/util";
import List from "../view/List";

const CashTtInfoList = ({ euroInfo }: { euroInfo: EurInfo }) => {
  const cashTtInfoList = getCashTtInfoTextList(euroInfo);
  return <List infoArray={cashTtInfoList} />;
};

export default CashTtInfoList;
