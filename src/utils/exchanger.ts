const exchanger = (amount: number, basePrice: number) =>
  Math.round(amount * basePrice).toLocaleString("ko-KR");

export default exchanger;
