import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import BasicCard from './components/BasicCard';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }

  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }

  body {
    line-height: 1;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  //style custom
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0F0B21;
    color: #e7e7ea;
  }

  a {
    text-decoration: none;
  }
`;

export const App = () => {
  const [isReady, setReady] = useState(false);
  const [eurInfo, setEurInfo] = useState<any>({});
  const [eurInputValue, setEurInputValue] = useState('0');

  const getEurInfo = async () => {
    const krweur = await fetch(
      'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWEUR'
    )
      .then((response) => response.json())
      .then((array) => array[0]);

    setEurInfo(krweur);
    setReady(true);
  };

  const exchangeEurToKrw = (krw: any) => krw * eurInfo.basePrice;

  useEffect(() => {
    getEurInfo();
    return () => {};
  }, []);

  const onChangeEurInput = (e: any) => {
    const userInputValue = e.target.value.split('.');
    const commaEveryThreeDigits = userInputValue.map(
      (number: string, idx: number) => {
        if (idx === 0) {
          return Number(number.replace(/[^0-9]/g, '')).toLocaleString();
        }
        if (idx === 1) {
          return number.slice(0, 2);
        }
      }
    );

    setEurInputValue(commaEveryThreeDigits.join('.'));
  };

  const krwInput = () => {
    const notComma = eurInputValue.split(',').join('');
    return Math.trunc(exchangeEurToKrw(notComma)).toLocaleString();
  };

  if (!isReady) return null;
  return (
    <div className="App">
      <GlobalStyle />
      <section style={{ display: 'flex', gap: '0.75rem' }}>
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
          }}
        >
          <section style={{ display: 'flex', gap: '0.75rem' }}>
            <BasicCard width={16} height={5}>
              EUR ▶ KWR
            </BasicCard>
            <BasicCard width={5} height={5}>
              icon
            </BasicCard>
          </section>
          <section style={{ display: 'flex', gap: '0.75rem' }}>
            <BasicCard width={10.5} height={10.5}>
              데이터
            </BasicCard>
            <BasicCard width={10.5} height={10.5}>
              데이터
            </BasicCard>
          </section>
        </section>
        <section>
          <BasicCard width={21.75} height={16.375}>
            차트
          </BasicCard>
        </section>
      </section>
      <div>환율기준 (1 유로)</div>
      <div>
        {eurInfo.basePrice}
        {eurInfo.basePrice - eurInfo.openingPrice > 0 && '▲'}
        {eurInfo.basePrice - eurInfo.openingPrice < 0 && '▼'}
        {eurInfo.changePrice}원 (
        {((eurInfo.changePrice / eurInfo.basePrice) * 100).toFixed(2)}%)
      </div>
      <div>
        <div>살때 : {eurInfo.cashBuyingPrice}</div>
        <div>팔때 : {eurInfo.cashSellingPrice}</div>
        <div>보낼때 : {eurInfo.ttSellingPrice}</div>
        <div>받을때 : {eurInfo.ttBuyingPrice}</div>
      </div>
      <hr />
      <input value={eurInputValue} onChange={onChangeEurInput} /> 유로 ▶︎{' '}
      <input value={krwInput()} disabled /> 원
    </div>
  );
};

export default App;
