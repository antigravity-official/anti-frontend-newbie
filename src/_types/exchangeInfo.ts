import { IKrewurItem } from "../_interfaces/krewur";

type tExchangInfoData = Pick<
  IKrewurItem,
  | "basePrice"
  | "openingPrice"
  | "changePrice"
  | "cashBuyingPrice"
  | "cashSellingPrice"
  | "ttSellingPrice"
  | "ttBuyingPrice"
>;

export { tExchangInfoData };
