import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import Reset from '@styles/reset';
import theme from '@styles/theme';

const Styles = ({ children }: { children?: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        {children}
      </>
    </ThemeProvider>
  );
};

export default Styles;
