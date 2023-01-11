import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import { MoneyInfo } from "../lib/types";

const mockData: MoneyInfo = {
  basePrice: 1339.48,
  cashBuyingPrice: 1366.13,
  cashSellingPrice: 1312.83,
  changePrice: 2.1,
  openingPrice: 1332.12,
  ttBuyingPrice: 1326.09,
  ttSellingPrice: 1352.87,
};

jest.mock("../model/ViewModel", () => {
  class MoneyInfoModel {
    getMoneyInfo(): MoneyInfo {
      return mockData;
    }
  }

  return {
    MoneyInfoModel,
  };
});

describe("App Test", () => {
  it("데이터 불러오기 전에는 로딩창이 있어야합니다.", async () => {
    render(<App />);

    const loadingComponent: HTMLElement = screen.getByText(/Loading/i);
    expect(loadingComponent).toBeInTheDocument();

    await waitFor(() => expect(loadingComponent).not.toBeInTheDocument());
  });

  it("input의 유로화는 최대 소수점 2자리 까지만 허용", async () => {
    render(<App />);

    await waitFor(() =>
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument()
    );

    const userInput: HTMLInputElement = screen.getByTestId("userInput");

    fireEvent.change(userInput, { target: { value: "1223.1234" } });

    expect(userInput.value).toBe("1223.12");

    fireEvent.change(userInput, { target: { value: "1223.12" } });
  });

  it("원화는 3자리마다 ,를 표시하고, 소숫점은 표시하지 않습니다.", async () => {
    render(<App />);

    await waitFor(() =>
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument()
    );

    const userInput: HTMLInputElement = screen.getByTestId("userInput");

    fireEvent.change(userInput, { target: { value: "1" } });

    const krwInput: HTMLInputElement = screen.getByTestId("krwInput");

    expect(krwInput.value).toBe("1,339");

    fireEvent.change(userInput, { target: { value: "10000" } });

    expect(krwInput.value).toBe("13,394,800");
  });
});
