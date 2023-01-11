const REGEX = /^\d*.?\d{0,2}$/;

export const checkEuro = (v: string) => REGEX.test(v);
