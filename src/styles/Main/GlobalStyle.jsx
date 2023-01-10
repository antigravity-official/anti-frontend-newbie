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
  input{
    background-color: white;
    border: none;
    border-radius:5px;
    outline: none;
    width:100%;
    height:40px;
    text-align:right;
    font-size:20px;
    padding:20px;
  }
`;
