import { render, fireEvent, screen } from "@testing-library/react";
import CalcEurForm from "./CalcEurForm";

const setup = () => {
  const utils = render(<CalcEurForm />);
  const input = utils.getByLabelText("EUR");
  return {
    input,
    ...utils,
  };
};

describe("환율 적용 테스트", () => {
  test("환율 적용 테스트", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "1" } });
    const span = screen.getByText("1341");
    expect(span).toBeInTheDocument();
  });
});
