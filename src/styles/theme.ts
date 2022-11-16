type Colors = {
  B100: string;
  B80: string;
  B60: string;
  B40: string;
  B20: string;
  WHITE: string;
};
type FontSize = {
  X_SMALL: string;
  SMALL: string;
  MEDIUM: string;
  TITLE: string;
};

const colors: Colors = {
  B100: '#312F2C',
  B80: '#626262',
  B60: '#A9A9A9',
  B40: '#CACACA',
  B20: '#E9E9E9',
  WHITE: '#FFFFFF',
};

const fontSize: FontSize = {
  X_SMALL: '12px',
  SMALL: '14px',
  MEDIUM: '16px',
  TITLE: '24px',
};

const theme = {
  colors,
  fontSize,
};

export default theme;
