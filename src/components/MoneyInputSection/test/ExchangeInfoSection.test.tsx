import MoneyInputSection from "../index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("환율 계산 테스트", async () => {
  const randomBasePrice = Math.floor(Math.random() * 10000);
  const randomInputValue = Math.floor(Math.random() * 10000);
  render(<MoneyInputSection currencyName="any" basePrice={randomBasePrice} />);
  const foreignInput = (await screen.findByTestId(
    "foreignInput"
  )) as HTMLInputElement;
  const wonInput = (await screen.findByTestId("wonInput")) as HTMLInputElement;

  userEvent.clear(foreignInput);
  userEvent.type(foreignInput, randomInputValue.toString());

  expect(wonInput.value).toBe(
    (randomInputValue * randomBasePrice).toLocaleString("ko-KR").toString()
  );
});
