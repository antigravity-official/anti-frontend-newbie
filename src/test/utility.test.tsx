import { commafy } from "../utility/numToString";

it("commafy test", () => {
  // 3자리 수마다 ','가 넣어지고 입력에 따라 소수점을 표현하는지 테스트합니다.
  expect(commafy(1234, 0)).toBe("1,234");
  expect(commafy(2312122, 2)).toBe("2,312,122.00");
  expect(commafy(990099.99)).toBe("990,099.99");
  expect(commafy(2323.2123, 0)).toBe("2,323");
});