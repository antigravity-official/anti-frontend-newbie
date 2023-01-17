import { applyThousandSeparator } from './applyThousandSeparator';

export function exchangeEurToKrw(euro: string, cashBuyingPrice: number = 0) {
  const numEuro = Number(euro.replaceAll(',', ''));
  const kwr = (numEuro * cashBuyingPrice).toFixed(0);

  return applyThousandSeparator(kwr);
}
