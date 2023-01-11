import { exchangeEurToKrw } from "./exchangeEurToKrw";

test("exchangeEurToKrw", () => {
  expect(exchangeEurToKrw(1.22, 1343)).toBe("1,638");
});
