import { CurrencyCode, CurrencyFormatModel } from "../../model/currency";

const useCurrencyFormatViewModel = (
  model: CurrencyFormatModel,
  code: CurrencyCode
) => {
  model.getFormat(code);

  return {
    formatter: model.formatter,
    format: model.format!,
  };
};

export default useCurrencyFormatViewModel;
