import { Dispatch, SetStateAction } from 'react';
import { EurInfo } from '../types';

export default class Model {
  private eurInfo: EurInfo = {
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
    changeRate: 0,
  };
  private krw: string = '';
  private eur: string = '';
  setEur;
  setKrw;

  constructor(
    eurInfo: EurInfo,
    eur: string,
    setEur: Dispatch<SetStateAction<string | undefined>>,
    krw: string,
    setKrw: Dispatch<SetStateAction<string | undefined>>
  ) {
    this.eurInfo = eurInfo;
    this.eur = eur;
    this.setEur = setEur;
    this.krw = krw;
    this.setKrw = setKrw;
  }

  getEurInfo(): { eurInfo: EurInfo; krw: string; eur: string } {
    return {
      eurInfo: this.eurInfo,
      krw: this.krw,
      eur: this.eur,
    };
  }

  setKrwState(newNum: string): void {
    this.setKrw(newNum);
  }

  setEurState(value: string): void {
    this.setEur(value);
  }
}
