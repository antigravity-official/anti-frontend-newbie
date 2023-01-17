export const KrwFormatter = (price: number | undefined) => {
  return `${price?.toLocaleString("ko-KR", {
    currency: "KRW",
    maximumFractionDigits: 0,
  })}`;
};

export const EurFormatter = (price: number | undefined) => {
  return `${price?.toLocaleString("ko-KR", {
    currency: "EUR",
    maximumFractionDigits: 2,
  })}`;
};

export const DepthPointTwo = (number: number) => {
  return number.toFixed(3);
};
