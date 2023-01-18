import { comma, deleteComma } from "./comma";

it("if num is int", () => {
  expect(comma(1234111)).toBe("1,234,111");
});

it("if num is demical", () => {
  expect(comma(1234111.112)).toBe("1,234,111.112");
});

it("if num < 1000", () => {
  expect(comma(11)).toBe("11");
});

it("string to num", () => {
  expect(deleteComma("123,123,111.11")).toBe(123123111.11);
});

it("no comma string to num", () => {
  expect(deleteComma("11")).toBe(11);
});
