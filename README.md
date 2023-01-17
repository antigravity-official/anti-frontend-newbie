### any 를 사용하지 말고 Type을 지정해 주세요.
> Types라는 폴더 안에 파일을 모아서 관리하였습니다.


<br>

### 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요.
/src의 하위 폴더들을 생성하여 파일을 위치시켰습니다.

```
├── public                  
├── src                              
    ├── api                          # axios Instance 생성 및 interceptor, 추상화 폴더
    ├── components          # UI 컴포넌트 폴더
    ├── constants              # React-Query Key 관리를 위한 상수 폴더
    ├── hooks                    # React-Query Custom Hook 폴더
    ├── view                      # MVVM 패턴을 위한 view 파일 폴더
    ├── utils                       # 유틸함수 폴더
├── README.md           
└── ...
```

<br>

### 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)
> exchangeEurToKrw는 유틸함수로 빼놓았습니다.
> viewModel안 changeHandler 메소드에서 exchangeEurToKrw 함수를 불러와 value값를 변경합니다.
> view 단에서는 해당 메소드를 호출할때마다 인풋 컴포넌트에서 재렌더링하여 viewModel의 value값을 가져와 활용합니다.

<br>

### 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.
> components 폴더 내 Loading 컴포넌트를 추가했습니다. 
> 상태관리를 위해 React-Query를 채택했습니다. 
> useQuery에서 isLoading 을 반환해주기 때문에 쉽게 구현이 가능했습니다. 

<br>

### 금액은 세자리 마다 콤마(,) 를 표시하세요.
> 모든 금액에 대해 .toLocaleString()을 사용해 구현하였습니다.

<br>

### 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.
> 관련 기능은 모두 아래 유틸함수들을 통해 구현하였습니다.
```js
export const exchangeEurToKrw = (eur: string, basePrice: number) => {
  if (eur === '') return '0';
  return Math.ceil(Number(eur) * basePrice).toLocaleString('ko-KR');
};

export const isLimitDecimal = (input: string) => {
  if (input.includes('.') && input.split('.')[1].length > 2) return true;
  return false;
};
```

<br>

### 비즈니스 로직을 분리하고 MVVM 구현패턴을 적용하세요.
> MVVM 패턴을 위해서 view, viewModel 파일을 따로 만들었으며 Controller파일을 통해  그 둘은 바인딩하였습니다. 
> React query로부터 반환된 data가 이미 Model 의 역할을 하고있다는 생각이 들었고, 
> 해당 data로 viewModel 인스턴스를 초기화해줍니다.
 
<br>

### 옵션 수행 항목 && 구조
> 비효율적이라기보단 useQuery에서 default로 뱉어주는 isLoading으로 손쉽게 fetching시의 로딩을 쉽게 구현했습니다.
> view단에서 DashBoard 와 InputBox 컴포넌트가 Input에 타이핑을 할때마다 둘다 re-rendering이 되는 것을 확인했습니다.
> 그래서 따로 props를 달리하여 개선을 하였습니다.
> MVVM 구조를 생각하면서 설계를 한적이 없어서 여러글을 참고하고 학습해가면서 진행하였습니다.
>> Model(app.tsx) 페칭과 동시에 Model에 역할을 한다고 봤습니다. 
>> 하지만 이때 바로 viewModel을 인스턴스 생성하려고했으나, data의 undefined로 인해 잘 안되었습니다. 
>> 그래서 viewController에 props로 data를 보내주고, viewModel 인스턴스를 생성하였습니다.
>> Controller에서 View에 ViewModel을 props로 넘겨주면서 데이터를 시각화했습니다.

<br>
