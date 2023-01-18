import {
  applyThousandSeparator,
  checkDecimalScale,
  convertOnlyNumOrDot,
  exchangeEurToKrw,
  splitDecimal,
} from '../numberFormat';

describe('numberFormat', () => {
  // applyThousandSeparator test
  describe('applyThousandSeparator', () => {
    it('return a number with thousand separators', () => {
      expect(applyThousandSeparator('10')).toBe('10');
      expect(applyThousandSeparator('10000')).toBe('10,000');
    });
  });

  // exchangeEurToKrw test
  describe('exchangeEurToKrw', () => {
    it('returns 0 when cashBuyingPrice value is undefined', () => {
      expect(exchangeEurToKrw('1,000', undefined)).toBe('0');
    });

    it('returns Eur to Kwr using thousand separators', () => {
      expect(exchangeEurToKrw('1', 1300)).toBe('1,300');
    });

    it('returns Eur with thousand separators to Kwr using thousand separators', () => {
      expect(exchangeEurToKrw('1,000', 1300)).toBe('1,300,000');
    });
  });

  // splitDecimal test
  describe('splitDecimal', () => {
    it('returns an integer when entering a number without a decimal point', () => {
      expect(splitDecimal('1234')).toEqual({ integer: '1234', decimal: '' });
    });

    it('returns integer and decimal when entering a number with a decimal point', () => {
      expect(splitDecimal('1234.56')).toEqual({
        integer: '1234',
        decimal: '56',
      });
    });

    it('returns an integer when input up to a decimal point', () => {
      expect(splitDecimal('1234.')).toEqual({ integer: '1234', decimal: '' });
    });
  });

  // checkDecimalScale test
  describe('checkDecimalScale', () => {
    it('return true to 2 decimal places', () => {
      expect(checkDecimalScale('12')).toBe(true);
      expect(checkDecimalScale('123.45')).toBe(true);
      expect(checkDecimalScale('123.456')).toBe(false);
    });
  });

  // convertOnlyNumOrDot test
  describe('convertOnlyNumOrDot', () => {
    it('return string consisting of only number and "."', () => {
      expect(convertOnlyNumOrDot('-12')).toBe('12');
      expect(convertOnlyNumOrDot('123a')).toBe('123');
      expect(convertOnlyNumOrDot('123.4a')).toBe('123.4');
      expect(convertOnlyNumOrDot('-123abc4')).toBe('1234');
    });
  });
});
