import { Dispatch, SetStateAction } from 'react';
import { EruInfo } from '../types/eruInfo';

export default class Model {
  private data: EruInfo = {
    basePrice: 0,
    openingPrice: 0,
    changePrice: 0,
    cashBuyingPrice: 0,
    cashSellingPrice: 0,
    ttSellingPrice: 0,
    ttBuyingPrice: 0,
  };
  private krw: string = '';
  private eur: string = '';
  setEur;
  setKrw;

  constructor(
    data: EruInfo,
    eur: string,
    setEur: Dispatch<SetStateAction<string | undefined>>,
    krw: string,
    setKrw: Dispatch<SetStateAction<string | undefined>>
  ) {
    this.data = data;
    this.eur = eur;
    this.setEur = setEur;
    this.krw = krw;
    this.setKrw = setKrw;
  }

  getAllEruInfo() {
    return { data: this.data, krw: this.krw, eur: this.eur };
  }
  setKrwState(newNum: number) {
    this.setKrw(newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
  }
  setEurState(value: string) {
    this.setEur(value);
  }
}
