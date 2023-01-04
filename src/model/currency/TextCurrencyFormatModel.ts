import CurrencyFormatModel from "./CurrencyFormatModel";

class TextCurrencyFormatModel extends CurrencyFormatModel {
  formatter(amount: string) {
    if (this.format === undefined) {
      throw new Error("get a Format first");
    }

    const { commaPosition, decimalPlace } = this.format;
    let [integer, decimal] = amount.split(".");

    if (commaPosition) {
      integer = Array.from(integer).reduceRight((acc, cur, idx) => {
        const idxFromRight = integer.length - 1 - idx;
        if (!idxFromRight) return cur;
        return (idxFromRight % commaPosition ? cur : cur + ",") + acc;
      }, "");
    }

    if (decimalPlace! > 0) {
      decimal =
        "." +
        (decimal ? decimal.slice(undefined, decimalPlace) : "").padEnd(
          decimalPlace!,
          "0"
        );
    } else {
      decimal = "";
    }

    return integer + decimal;
  }
}

export default TextCurrencyFormatModel;
