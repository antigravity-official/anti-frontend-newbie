import ViewModel from '../ViewModel/ViewModel';
import Model from '../Model/Model';
import { render } from 'react-dom';
import ExchangeInput from '../components/ExchangeInput';

test('exchange test', () => {
  // mock data
  const mock = {
    basePrice: 1400,
    openingPrice: 1200,
    changePrice: 0,
    cashBuyingPrice: 1400,
    cashSellingPrice: 1420,
    ttSellingPrice: 1370,
    ttBuyingPrice: 1390,
    changeRate: 0.00967,
  };
  const krw = '';
  const eur = '';
  const setKrw = () => {};
  const setEur = () => {};
  const model = new Model(mock, eur, setEur, krw, setKrw);
  const viewModel = new ViewModel(model);

  // test of exchange Eur To Krw
  expect(viewModel.exchangeEurToKrw(3000, mock.basePrice)).toBe(
    Math.floor(4200000)
  );
});
