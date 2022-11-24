import { EurInfoProps } from "./EurInfoProps";

export type PriceDetailProps = Pick<
  EurInfoProps,
  | "basePrice"
  | "openingPrice"
  | "changePrice"
  | "cashBuyingPrice"
  | "cashSellingPrice"
  | "ttSellingPrice"
  | "ttBuyingPrice"
>;

export interface EurInfoContainerProps extends PriceDetailProps {
  moneyState: () => string;
  percent: () => string;
}
