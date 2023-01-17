export function splitDecimal(numStr: string) {
  const parts = numStr.split('.');
  const integer = parts[0];
  const decimal = parts[1] || '';

  return { integer, decimal };
}
