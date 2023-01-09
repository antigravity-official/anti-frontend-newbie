import Styles from '@styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Styles>
      <App />
    </Styles>
  </React.StrictMode>,
  document.getElementById('root'),
);
