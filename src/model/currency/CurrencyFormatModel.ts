import { CurrencyCode } from "./Currency";
import { CurrencyFormat } from "./CurrencyFormat";
import CurrencyFormatRepository from "./CurrencyFormatRepository";

interface CurrencyFormatModelInterface {
  repository: CurrencyFormatRepository;
  format?: CurrencyFormat;

  getFormat: (code: CurrencyCode) => void;

  formatter: (amount: string) => string;
}

class CurrencyFormatModel implements CurrencyFormatModelInterface {
  repository: CurrencyFormatRepository;
  format?: CurrencyFormat;

  constructor(repository: CurrencyFormatRepository) {
    this.repository = repository;
    this.formatter = this.formatter.bind(this);
  }

  getFormat(code: CurrencyCode): void {
    this.format = this.repository.getFormat(code);
  }

  formatter(amount: string) {
    throw new Error("Don't use this class. Use child class of this.");
    return "";
  }
}

export default CurrencyFormatModel;
