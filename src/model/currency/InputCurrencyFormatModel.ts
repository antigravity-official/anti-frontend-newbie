import CurrencyFormatModel from "./CurrencyFormatModel";

class InputCurrencyFormatModel extends CurrencyFormatModel {
  formatter(amount: string) {
    if (this.format === undefined) {
      throw new Error("get a Format first");
    }

    const { decimalPlace } = this.format;

    amount = amount.replaceAll(/[^0-9.]/g, "");

    if (!amount.length) {
      return "0";
    }

    const decimalPoint = amount.indexOf(".");
    if (decimalPoint >= 0) {
      amount =
        (decimalPoint > 0 ? "" : "0") +
        amount.slice(
          undefined,
          decimalPoint + (decimalPlace ? decimalPlace + 1 : 0)
        );
    }

    if (amount.match(/[0]+[1-9]/)) {
      amount = amount.replace(/^0+/, "");
    } else {
      amount = amount.replace(/^0+/, "0");
    }

    return amount;
  }
}

export default InputCurrencyFormatModel;
