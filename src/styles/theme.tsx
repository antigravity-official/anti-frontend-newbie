const fontSize = {
  small: '12px',
  medium: '14px',
  large: '16px',
  title: '24px',
};

const fontWeight = {
  light: '200',
  regular: '400',
  bold: '700',
};

const colors = {
  black: '#000',
  red: '#fe1515',
  blue: '#1980e8',
};

const theme = { fontSize, fontWeight, colors };

type ThemeType = typeof theme;
type FontsSizeType = keyof typeof fontSize;
type FontsWeightType = keyof typeof fontWeight;
type ColorsType = keyof typeof colors;

export type { ThemeType, ColorsType, FontsSizeType, FontsWeightType };
export default theme;
