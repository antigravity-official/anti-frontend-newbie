const exchanger = (amount: number, basePrice: number): string =>
  Math.round(amount * basePrice).toLocaleString("ko-KR");

export default exchanger;
