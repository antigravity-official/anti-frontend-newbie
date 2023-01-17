const trimAmount =
  (fraction?: number) =>
  (amount: number): number => {
    return Number(amount.toFixed(fraction || 0));
  };

export default trimAmount;
