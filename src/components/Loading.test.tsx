import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
describe("Loading 컴포넌트 테스트", () => {
  test("노출 텍스트 확인", () => {
    render(<Loading />);
    const byText = screen.getByText("Loading...");
    expect(byText).toBeInTheDocument();
  });
});
