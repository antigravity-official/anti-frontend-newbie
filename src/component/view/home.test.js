import HomeView from "./home";
import { Suspense } from "react";
import "@testing-library/jest-dom";
import { RecoilRoot } from "recoil";
import { render, fireEvent, screen } from "@testing-library/react";

const view = () => {
  render(
    <RecoilRoot>
      <Suspense fallback={<div>loading...</div>}>
        <HomeView />
      </Suspense>
    </RecoilRoot>
  );
  const inputEur = screen.getByRole("textbox", { name: "유로" });
  const outputKrw = screen.getByRole("textbox", { name: "원" });
  return {
    inputEur,
    outputKrw,
  };
};

describe("view test", () => {
  test("input 생성 여부", () => {
    const { inputEur, outputKrw } = view();
    expect(inputEur).toBeInTheDocument();
    expect(outputKrw).toBeInTheDocument();
  });

  test("input 입력 확인", () => {
    const { inputEur, outputKrw } = view();
    fireEvent.change(inputEur, { target: { value: 123 } });
    expect(inputEur.value).toBe("123");
    fireEvent.change(outputKrw, { target: { value: "164505" } });
    expect(outputKrw.value).toBe("164505");
  });
});
