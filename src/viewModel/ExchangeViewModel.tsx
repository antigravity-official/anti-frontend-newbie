import { EurInfoProps } from "../@types/EurInfoProps";

export class exchangeViewModel {
  basePrice: number;
  openingPrice: number;
  changePrice: number;
  modifiedAt: string;

  constructor(eurInfo?: EurInfoProps) {
    this.basePrice = eurInfo?.basePrice ?? 0;
    this.openingPrice = eurInfo?.openingPrice ?? 0;
    this.changePrice = eurInfo?.changePrice ?? 0;
    this.modifiedAt = eurInfo?.modifiedAt ?? "정보 없음";
  }

  moneyState() {
    if (this.basePrice === this.openingPrice) return "-";
    return this.basePrice - this.openingPrice > 0 ? "▲" : "▼";
  }

  percent() {
    return `${((this.changePrice / this.basePrice) * 100).toFixed(2)}%`;
  }

  exchangeDate() {
    return this.modifiedAt !== "정보 없음"
      ? this.modifiedAt.split("T")[0]
      : "정보 없음";
  }
}
