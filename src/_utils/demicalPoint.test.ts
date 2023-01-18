import { floor } from "./demicalPoint";

it("0 demical point", () => {
  expect(floor(1234.1, 0)).toBe(1234);
});

it("1 demical point", () => {
  expect(floor(1234.166, 1)).toBe(1234.1);
});

it("2 demical point", () => {
  expect(floor(1234.4444, 2)).toBe(1234.44);
});
