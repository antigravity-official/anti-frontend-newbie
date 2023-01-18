import React from "react";
import Main from "./page/Main"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export const App = () => {
  
  return ( 
    <>
    <GlobalStyle/>
      <Main />
    </>
  );
};

export default App;
