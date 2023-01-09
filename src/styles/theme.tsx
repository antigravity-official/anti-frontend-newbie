const fontSize = {};

const fontWeight = {};

const colors = {};

const theme = { fontSize, fontWeight, colors };

type ThemeType = typeof theme;
type FontsSizeType = keyof typeof fontSize;
type FontsWeightType = keyof typeof fontWeight;
type ColorsType = keyof typeof colors;

export type { ThemeType, ColorsType, FontsSizeType, FontsWeightType };
export default theme;
