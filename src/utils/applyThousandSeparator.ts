export function applyThousandSeparator(str: string) {
  const thousandReg = /\B(?=(\d{3})+(?!\d))/g;

  return str.replace(thousandReg, ',');
}
