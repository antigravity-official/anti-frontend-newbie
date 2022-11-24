import { EurInfoProps } from "./EurInfoProps";

export type PriceDetailProps = Pick<
  EurInfoProps,
  "basePrice" | "openingPrice" | "changePrice"
>;

export interface EurInfoContainerProps extends PriceDetailProps {
  moneyState: () => string;
  percent: () => string;
  exchangeDate: () => string;
}
