import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #6E6ED7;
    font-size: 18px;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
