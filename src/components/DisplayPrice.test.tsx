import { render, screen } from "@testing-library/react";
import DisplayPrice from "./DisplayPrice";

describe("DisplayPrice", () => {
  test("DisplayPrice price만 있는 경우, price만 노출", () => {
    render(<DisplayPrice price={3000} />);
    expect(screen.getByText("3,000")).toBeInTheDocument();
  });
  test("price에 환율 적용되는지 확인", () => {
    render(<DisplayPrice price={2 * 1340} />);
    expect(screen.getByText("2,680")).toBeInTheDocument();
  });
});
