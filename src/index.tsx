import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import { Global } from '@emotion/react';
import GlobalStyle from './style/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyle} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
