import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import Styles from '@styles';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Styles>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Styles>
  </React.StrictMode>,
  document.getElementById('root'),
);
