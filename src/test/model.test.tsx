import { act } from "react-dom/test-utils";
import KreurModel from "../model/KreurModel";
import ExchangeViewModel from "../viewModel/ExchangeViewModel";


it("kreur model", async () => {
  let model: KreurModel = new KreurModel();
  let viewmodel: ExchangeViewModel = new ExchangeViewModel(model);


  expect(viewmodel.getAll().basePrice).toBe(1000);
  expect(viewmodel.exchange(5)).toBe(5000);
  expect(viewmodel.exchange(221)).toBe(221000);
  
  // resolved promises를 적용하려면 `act()`의 비동기 버전을 사용하세요.
  await act(async () => {
    await viewmodel.update();
  });

  expect(viewmodel.getAll().basePrice).toBeGreaterThan(1000);

  viewmodel.set({
    basePrice: 1340.25,
    cashBuyingPrice: 1320.44,
    cashSellingPrice: 1350.55,
    changePrice: 21.45,
    openingPrice: 1327.9923,
    ttBuyingPrice: 1350.231,
    ttSellingPrice: 1360.232,
  })

  expect(viewmodel.getAll().openingPrice).toBe(1327.9923)
});