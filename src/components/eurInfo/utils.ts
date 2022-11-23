export const removeDecimalPointToPrices = (prices: Record<string, number>) => {
  const removedDecimalPointPrices = Object.entries(prices).reduce(
    (p, [k, v]) => ({ ...p, [k]: Math.floor(v) }),
    {} as Record<string, number>
  );
  return removedDecimalPointPrices;
};
