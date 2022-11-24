import exchanger from "../exchanger";

describe("환전기 테스트", () => {
  test("amount:5 basePrice:1212.12 expect:6060.6", () => {
    expect(exchanger(5, 1212.12)).toBe("6,061");
  });
  test("amount:15.17 basePrice:1200.3 expect:6060.6", () => {
    expect(exchanger(15.17, 1200.3)).toBe("18,209");
  });
});
