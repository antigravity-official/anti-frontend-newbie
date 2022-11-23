import { fireEvent, render, screen } from "@testing-library/react";
import ExchangeMoneyInput from "../../components/ExchangeMoneyInput";

test("환율 계산1", () => {
  // basePrice = 환율
  render(<ExchangeMoneyInput country={"유로"} basePrice={1000} />);

  const input = screen.getByTestId("exchangeInput");

  // value = input에 들어가는 값
  fireEvent.change(input, { target: { value: "1000" } });

  const exMoney = screen.getByTestId("exMoney");

  expect(exMoney.innerHTML).toBe("1,000,000 원");
});

test("환율 계산2", () => {
  // basePrice = 환율
  render(<ExchangeMoneyInput country={"유로"} basePrice={1200} />);

  const input = screen.getByTestId("exchangeInput");

  // value = input에 들어가는 값
  fireEvent.change(input, { target: { value: "12000" } });

  const exMoney = screen.getByTestId("exMoney");

  expect(exMoney.innerHTML).toBe("14,400,000 원");
});
