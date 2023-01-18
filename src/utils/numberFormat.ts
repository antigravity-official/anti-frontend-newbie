export function applyThousandSeparator(str: string) {
  const thousandReg = /\B(?=(\d{3})+(?!\d))/g;

  return str.replace(thousandReg, ',');
}

export function exchangeEurToKrw(euro: string, cashBuyingPrice: number = 0) {
  const numEuro = Number(euro.replaceAll(',', ''));
  const kwr = (numEuro * cashBuyingPrice).toFixed(0);

  return applyThousandSeparator(kwr);
}

export function splitDecimal(numStr: string) {
  const parts = numStr.split('.');
  const integer = parts[0];
  const decimal = parts[1] || '';

  return { integer, decimal };
}

export function checkDecimalScale(euroStr: string) {
  const regex = /^\d*.?\d{0,2}$/;

  return regex.test(euroStr);
}

export function convertOnlyNumOrDot(str: string) {
  return str.replace(/(^0+)/, '').replace(/[^0-9.]/g, '');
}
