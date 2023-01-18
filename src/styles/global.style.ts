import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  &::before,
  &::after {
    box-sizing: border-box;
  }
  /* font */
  body {
    display: flex;
    justify-content: center;
    font-family: Spoqa Han Sans Neo, sans-serif;
  }
`;

export default GlobalStyle;
