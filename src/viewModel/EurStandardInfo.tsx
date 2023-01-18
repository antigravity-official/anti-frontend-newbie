import React from "react";
import { getEurStandardText } from "../utils/util";
import EurStandardInfoUI from "../view/EurStandardInfoUI";

interface Props {
  basePrice: number;
  changePrice: number;
  openingPrice: number;
}

const EurStandardInfo = ({ basePrice, changePrice, openingPrice }: Props) => {
  const eurStandard = getEurStandardText(basePrice, changePrice, openingPrice);
  return <EurStandardInfoUI eurStandard={eurStandard} />;
};

export default EurStandardInfo;
