import axios from "axios";
import MoneyInputSection from "../../../components/MoneyInputSection";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("axios");

test("환율 계산 테스트", async () => {
  const randomBasePrice = Math.floor(Math.random() * 10000);
  const randomInputValue = Math.floor(Math.random() * 10000);
  console.log(randomBasePrice, randomInputValue);
  render(<MoneyInputSection currencyName="any" basePrice={randomBasePrice} />);
  const foreignInput = (await screen.findByTestId(
    "foreignInput"
  )) as HTMLInputElement;
  const wonInput = (await screen.findByTestId("wonInput")) as HTMLInputElement;

  userEvent.clear(foreignInput);
  userEvent.type(foreignInput, randomInputValue.toString());

  expect(wonInput.value).toBe((randomInputValue * randomBasePrice).toString());
});
