/** @jsxImportSource @emotion/react */
import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './component/Index';
import GlobalStyles from './styles/GlobalFont';

export interface WrapperProps {
  children: React.ReactNode;
  delay?: any;
}

export const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<Index />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
