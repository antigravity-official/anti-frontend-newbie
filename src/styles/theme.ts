const size = {
  small: '576px',
  mobile: '768px',
  tablet: '992px',
  desktop: '1200px',
};

const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    sideColor: '#F8F8F8',
    mainColor: '#f5f5f5',
    footerColor: '#3B3B3B',
    lightGrey: '#F4F4F4',
    grey: '#e5e4e4',
    deepGrey: '#3B3B3B',
    background: '#FAFAFC',
    defaultText: '#101010',
    hoverBlue: '#2542E6',
    bordeRadius: '6px',
    dotSize: '30px',
    dotColor: '#fff',
    pageWidth: '1080px',
    highModalShdow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    highModalDeepShdow: 'rgba(11, 11, 11, 0.8) 0px 8px 24px',
    lowModalShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 3px',
    lowModalDeepShadow: 'rgba(0, 0, 0,0.6) 0px 2px 5px',
  },
  small: '576px',
  mobile: '768px',
  tablet: '992px',
  desktop: '1200px',
  responsive: {
    small: `(max-width: ${size.small})`,
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    desktop: `(max-width: ${size.desktop})`,
  },
  flexMixin: (align = 'center', justify = 'center') => `
  display:flex;
  align-items:${align};
  justify-content:${justify};
  `,
};

export default theme;
