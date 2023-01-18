import React from "react";

interface Props {
  basePrice: string;
  changeArrow: string;
  changePrice: string;
  changePricePercentage: string;
}

const EurStandardInfo = ({ eurStandard }: { eurStandard: Props }) => {
  return (
    <div>
      <h1>환율기준 (1유로)</h1>
      <div>
        {eurStandard.basePrice}
        {eurStandard.changeArrow}
        {eurStandard.changePrice}원 ({eurStandard.changePricePercentage})
      </div>
    </div>
  );
};

export default EurStandardInfo;
