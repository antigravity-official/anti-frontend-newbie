import Header from "./Header";
import Details from "./Details";
import EuroToWonForm from "./EuroToWonForm";
import { Response } from "../type/index";

interface Props {
  eurInfo: Response;
}

export default function Container({ eurInfo }: Props) {
  const {
    basePrice,
    openingPrice,
    changePrice,
    cashBuyingPrice,
    cashSellingPrice,
    ttSellingPrice,
    ttBuyingPrice,
  } = eurInfo;

  return (
    <>
      <Header
        basePrice={basePrice}
        openingPrice={openingPrice}
        changePrice={changePrice}
      />
      <Details
        cashBuyingPrice={cashBuyingPrice}
        cashSellingPrice={cashSellingPrice}
        ttSellingPrice={ttSellingPrice}
        ttBuyingPrice={ttBuyingPrice}
      />
      <hr />
      <EuroToWonForm basePrice={basePrice} />
    </>
  );
}
