import { floor, isUnderTwoDemical } from "./demicalPoint";

it("0 demical point", () => {
  expect(floor(1234.1, 0)).toBe(1234);
});

it("1 demical point", () => {
  expect(floor(1234.166, 1)).toBe(1234.1);
});

it("2 demical point", () => {
  expect(floor(1234.4444, 2)).toBe(1234.44);
});

it("no input", () => {
  expect(isUnderTwoDemical("")).toBe(false);
});

it("check 2 demical", () => {
  expect(isUnderTwoDemical("11.11")).toBe(false);
});

it("check under 3 demical", () => {
  expect(isUnderTwoDemical("11.111")).toBe(true);
});

it("check under no demical", () => {
  expect(isUnderTwoDemical("11")).toBe(false);
});
