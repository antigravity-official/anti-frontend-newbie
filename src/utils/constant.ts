interface Index {
  [key: string]: string | number;
}

export const CASH_TT_INFO_LIST = ["cashBuyingPrice", "cashSellingPrice", "ttSellingPrice", "ttBuyingPrice"];

export const CASH_TT_INFO_TEXT: Index = {
  cashBuyingPrice: "살때",
  cashSellingPrice: "팔때",
  ttSellingPrice: "보낼때",
  ttBuyingPrice: "받을때",
};
