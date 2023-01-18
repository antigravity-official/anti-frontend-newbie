### 필수 수행 항목

1. any 를 사용하지 말고 Type을 지정해 주세요

```typescript
// /typing.d.ts

export interface ExchangeInfo {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  change: string;
  changePrice: number;
  changeRate: number;
  ...
}

export type Currency = "USD" | "EUR" | "JPY";
```

---

2. 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요

```typescript
src
│  App.tsx
│  index.tsx
│
├─api // 비동기 함수
│      index.ts
│
├─constants // 상수 ex) const EUR = "EUR, const USD = "USD"
│      index.ts
│
├─hooks
│      useFetchExchangeInfo.ts
│      useInput.ts
│
├─Presentation
│  ├─components
│  │  └─ExchangeRate // View를 Title, Info, Input 으로 나눔
│  │          ExchangeInput.tsx
│  │          ExchangeRateInfo.tsx
│  │          ExchangeRateTitle.tsx
│  │
│  └─Views
│      └─ExchangeRate
│              View.tsx
│              ViewModel.ts // ExchangeRateView에 해당하는 View Model
│
└─utils
        index.ts // 공통으로 쓰일만한 함수 // addComma(), unComma()

```

---

3. 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)

```typescript
/src/aeeinnoprstt / Views / ExcchangeRate / ViewModel.ts;

// Title 과 Info 에 띄워주는 원화를 내림했기때문에 해당 로직에도 Math.floor 를 적용하여 계산했다.
const exchangeEurToKrw = useCallback(
  (inputMoney: string, basePrice: number) => {
    const pureMoney = Number(unComma(inputMoney));
    const newBasePrice = Math.floor(basePrice);
    const exchangedMoney = Math.floor(pureMoney * newBasePrice);
    const formattingMoney = addComma(exchangedMoney);
    return formattingMoney;
  },
  []
);
```

---

4. 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.

```typescript jsx
// react-spinners 라이브러리를 사용해 로딩 화면을 구현했다.
import { SyncLoader } from "react-spinners";

if (!isReady || exchangeInfo === null) {
  return (
    <>
      <SyncLoader color="#36d7b7" />
      <div>환율 정보를 로딩중입니다.</div>
    </>
  );
}
```

---

5. 금액은 세자리 마다 콤마(,) 를 표시하세요

```typescript
// /src/utils/index.ts

export const addComma = (number: string | number) => {
  let temp = number;
  if (typeof temp === "number") {
    temp = String(temp);
  }
  return temp.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};

export const unComma = (string: string) => {
  return string.replaceAll(",", "");
};
```

---

6. 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.

```typescript jsx
// /src/hooks/useInput.ts
const useInput = (initialState: string) => {
  const [money, setMoney] = useState(initialState);
  const [inputError, setInputError] = useState("");

  // prevInteger 는 이전 숫자를 기억하고 사용자 커서 위치를 조작하는데 사용
  const prevInteger = useRef("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputError("");
    const { value } = e.target;
    const [integer, decimal, notValid] = value.split(".");
    const caret = e.target.selectionStart ?? value.length;
    // "."을 2개 이상 입력했다면 early return
    if (notValid !== undefined) {
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret - 1;
        e.target.selectionEnd = caret - 1;
      });
      return setInputError("소수점은 한번만 입력할 수 있습니다.");
    }
    // 만약 소수점을 3자리 이상 입력했다면 early return
    if (decimal?.length > 2) {
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret - 1;
        e.target.selectionEnd = caret - 1;
      });
      return setInputError("소수점은 최대 2자리까지만 입력할 수 있습니다.");
    }
    // 숫자, ".", "," 외에 다른 입력값이 입력 되는 경우 early return
    if (/[^\d.,]/.test(integer)) {
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret - 1;
        e.target.selectionEnd = caret - 1;
      });
      return setInputError("숫자만 입력할 수 있습니다.");
    }
    const pureInteger = unComma(integer);
    const formattedInteger = addComma(pureInteger);
    const formattedDecimal = decimal?.slice(0, 2);
    const fullMoney =
      formattedDecimal === undefined
        ? formattedInteger
        : formattedInteger + "." + formattedDecimal;
    // 현재 입력 값과 이전 입력 값을 비교해서 커서의 위치를 조작
    const diffLength = formattedInteger.length - prevInteger.current.length;
    if (diffLength === 2) {
      // 콤마가 추가됐을 경우 커서 위치 유지
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret + 1;
        e.target.selectionEnd = caret + 1;
      });
    } else if (diffLength === -2) {
      // 콤마가 제거됐을 경우 커서 위치 유지
      window.requestAnimationFrame(() => {
        // 만약 맨앞 숫자가 제거되면 맨앞을 유지하는 로직
        const newCaret = caret === 0 ? 0 : caret - 1;
        e.target.selectionStart = newCaret;
        e.target.selectionEnd = newCaret;
      });
    } else {
      // 콤마가 추가,제거 되지 않은 경우
      window.requestAnimationFrame(() => {
        e.target.selectionStart = caret;
        e.target.selectionEnd = caret;
      });
    }

    setMoney(fullMoney);
    prevInteger.current = formattedInteger;
  }, []);

  return { money, onChange, inputError };
};

// /src/utils/index.ts
export const formattingWon = (number: number) => {
  const floorNumber = Math.floor(number);
  const formattedWon = addComma(floorNumber);
  return `${formattedWon}원`;
};
```

---

7. 비니지스 로직을 분리하고 MVVM 구현패턴을 적용하세요.

- 2번 폴더 구조에 나와있습니다.

---

## 옵션 수행 항목

1. 비효율적으로 작성된 코드가 있다면 변경하세요

- 비효율적인 코드는 아니지만 사용자의 입력에 따라 ( , )를 추가, 제거하는 경우 사용자의 현재 커서 위치가<br/>
  맨뒤로 이동하는 현상이 있어 추가했습니다.<br/>
  또한 사용자로 부터 잘못된 입력값이 입력되었을때 에러 메시지가 출력되도록 하였습니다.

2. 테스트 코드를 작성하세요

- 테스트코드는 작성하지 않았습니다.

---

## 제출내용

1. 리팩토링 의도와 구조에 대한 간략한 설명을 PR본문에 적어주세요

```typescript jsx
// 이후 확장성을 고려해 currency를 props로 전달 받도록 하였으며
// currency를 변경하면 해당 환율 계산기가 실행되도록 리팩토링하였습니다.
export const App = () => {
  return (
    <div className="App">
      <ExchangeRate currency={EUR} />
      {/*<ExchangeRate currency={USD} />*/}
      {/*<ExchangeRate currency={JPY} />*/}
    </div>
  );
};

```
```dotenv
# api 주소는 .env 파일을 만들어 환경변수로 설정하였지만, .gitignore에서는 제거하여 push하였습니다.
#.env
REACT_APP_EXCHANGE_RATE_URL=https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRW
```