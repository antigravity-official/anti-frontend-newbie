export interface IexchangeRate {
  basePrice: number | string
  changePrice: number | string
  cashBuyingPrice: number | string
  cashSellingPrice: number | string
  ttSellingPrice: number | string
  ttBuyingPrice: number | string
  openingPrice?: number | string
  changeRate?: number | string
  rate?: number | string
}
