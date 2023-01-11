### 타입 지정
- type선언
```typescript
export interface EurInfoTypes {
  basePrice: number;
  cashBuyingPrice: number;
  cashSellingPrice: number;
  change: string;
  changePrice: number;
  changeRate: number;
  code: string;
  country: string;
  createdAt: string;
  currencyCode: string;
  currencyName: string;
  currencyUnit: number;
  date: string;
  exchangeCommission: number;
  fcSellingPrice: null;
  high52wDate: string;
  high52wPrice: number;
  highPrice: number;
  id: number;
  low52wDate: string;
  low52wPrice: number;
  lowPrice: number;
  modifiedAt: string;
  name: string;
  openingPrice: number;
  provider: string;
  recurrenceCount: number;
  signedChangePrice: number;
  signedChangeRate: number;
  tcBuyingPrice: null;
  time: string;
  timestamp: number;
  ttBuyingPrice: number;
  ttSellingPrice: number;
  usDollarRate: number;
}
```
- 사용예시
```typescript
  const { data = [], isLoading } = useFetch<EurInfoTypes[]>({
    url: `${process.env.REACT_APP_API_URL}`,
  });
```

### 컴포넌트 분리
- src
  - components
    - main
      - ExchangeInfo
      - ExchangeInputs
      - ExchangeRate
    - ui
      - Input
      - Loading
      - VerticalLine
      
### 환율을 통해 원화로 표시
src/common/utils.ts
```typescript
 export const exchangeEurToKrw = (eur: number, basePrice: number) => {
  const num = eur * basePrice;
  return num.toLocaleString('ko-KR', {
    maximumFractionDigits: 0,
  });
};
```

### 로딩 중 표시
useFetch라는 커스텀 훅을 구현하여 로딩 시 isLoadding 이라는 값을 받아 사용하여 Loading 컴포넌트를 
```typescript
if (isLoading) return <Loading />;
```

### 금액 3자리 콤마 표시, 유로화는 2자리까지 표시
useEurKrw 라는 커스텀 훅 구현
```typescript
const useEurKrw = (euroPrice: number) => {
  const [eur, setEur] = useState<string>('');
  const [krw, setKrw] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!checkEuro(e.target.value)) return;

    setEur(e.target.value);
    setKrw(exchangeEurToKrw(Number(e.target.value), euroPrice));
  };

  return { eur, krw, onChangeHandler };
};
```
checkEuro 함수는
common/validation/CheckEuro.ts 에 구현
```typescript
const REGEX = /^\d*.?\d{0,2}$/;

export const checkEuro = (v: string) => REGEX.test(v);

```

### MVVM 패턴

model은 useFetch 커스텀 훅으로 대체
viewModel은 useEurKrw과 같이 커스텀훅으로 비지니스 로직과 view를 나누어 작업

#### 추가 작업
- API URL을 env에 옮김(노출이 되면 안 되기 때문)


