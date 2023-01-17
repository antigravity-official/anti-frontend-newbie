import { render, screen } from "@testing-library/react";
import { useIsUp } from "../data-access/hooks/useIsUp";
import UpNDown from "./UpNDown";

jest.mock("../data-access/hooks/useIsUp", () => ({
  useIsUp: jest.fn(),
}));

const renderComponent = ({ bool }: { bool: boolean }) => {
  (useIsUp as jest.Mock<any, any>).mockImplementation(() => bool);
  return render(<UpNDown />);
};

describe("UpNDown 테스트", () => {
  test("첫 렌더링 UI 테스트, 결과는 ▼", () => {
    renderComponent({ bool: false });
    expect(screen.getByText("▼")).toBeInTheDocument();
  });
  test("useIsUp() 함수의 반환이 true인 경우, 결과는 ▲", () => {
    renderComponent({ bool: true });
    expect(screen.getByText("▲")).toBeInTheDocument();
  });
  test("useIsUp() 함수의 반환이 false인 경우, 결과는 ▼", () => {
    renderComponent({ bool: false });
    expect(screen.getByText("▼")).toBeInTheDocument();
  });
});
