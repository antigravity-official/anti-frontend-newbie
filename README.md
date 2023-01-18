# 안티그래비티 프론트엔드 입사자 기술과제 : 이상현

<img width="888" alt="Pasted Graphic 8" src="https://user-images.githubusercontent.com/110229788/213265891-d3482860-0c48-41ed-af6e-f679dc34967f.png">

## 의도

향후 다양한 페이지 혹은 다양한 환율 계산이 추가된다는 가정하에 리팩토링했습니다. MVVM 패턴을 기반으로 관심사 별로 컴포넌트를 분리하고, input 등 공통 컴포넌트를 제작해 컴포넌트 재사용성을 높였습니다.

## 구조

```
anti-frontend-newbie
└─ src
   ├─ App.tsx
   ├─ api
   │  └─ getEurInfo.tsx
   ├─ component
   │  ├─ commons
   │  │  └─ input.tsx
   │  └─ home
   │     └─ home.tsx
   ├─ hooks
   │  └─ useHome.tsx
   ├─ index.tsx
   ├─ lib
   │  ├─ utils.ts
   │  └─ validation.ts
   ├─ router
   │  └─ router.tsx
   ├─ store
   │  └─ eurInfo.ts
   ├─ styles
   │  ├─ globalStyles.ts
   │  └─ homeStyles.ts
   └─ types
      ├─ eurInfo.ts
      └─ homeView.ts
```

## 과제 해결 여부

### 필수 수행 항목

1. any 를 사용하지 말고 Type을 지정해 주세요
   - any를 삭제하고, 적절한 타입을 지정했으며, 객체 및 사용자 정의가 필요할 경우 interface를 사용해 type을 지정 후 사용했습니다.
2. 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요 - 컴포넌트를 역할 및 관심사별로 분류했고, 그에 맞춰 폴더구조를 개편했습니다.
3. 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)
   - 구현 완료.
4. 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.
   - 페이지 로딩 중일 경우 react Suspense를 이용해 화면에 로딩 중임을 표시했고, 환율 정보를 가져오는 데 시간이 걸릴 경우 먼저 화면을 그린 후 해당 컴포넌트만 추후 업데이트 되도록 제작했습니다. 이때 layout shift가 되지 않도록 고정 높이값을 설정해두었습니다.
5. 금액은 세자리 마다 콤마(,) 를 표시하세요
   - 유로화, 원화 모두 toLocaleString를 이용해 세자리마다 콤마를 표기했습니다.
6. 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.
   - 5번과 마찬가지로 toLocaleString를 이용해 유로화는 소수점 2자리, 원화는 소수점을 표기하지 않았습니다. 다만, 환율 정보 basePrice와 변화 값은 사용자에게 정확한 정보를 전달하는게 좋아보여 그대로 두었습니다.
   - input은 정규식을 이용해 유로화 소수점 2자리까지만 입력되도록 구현했습니다.
7. 비니지스 로직을 분리하고 MVVM 구현패턴을 적용하세요.
   - recoil을 이용해 store/eurInfo.ts를 Model로 삼았고, hooks/useHome.tsx를 viewModel로, component/view/home.tsx를 view로 제작했습니다.
   - exchangeEurToKrw 함수를 recoil selector를 이용해 Model 쪽으로 분리시켰습니다.

### 옵션 수행 항목

1. 비효율적으로 작성된 코드가 있다면 변경하세요
   - exchangeEurToKrw 함수에서 매개변수명이 krw로 오기되어 있어 eur로 변경했습니다.
   - api만 담당 하는 함수를 별도로 분리했습니다.
   - isReady State 대신 eurInfo값 유무에 따라 컴포넌트 or loading을 브라우징하게 바꿨습니다.
2. 테스트 코드를 작성하세요
   - 테스트 코드는 처음이라 공부하면서 익힌 곳까지 코드를 적어두었습니다.

## 기타 사항

- 상태에 따른 css 조작을 위해 css-in-JS 라이브러리인 emotion를 사용했습니다.
- 환율 상승 및 하락에 따라 색상이 바뀌도록 했습니다(상승 시 red, 하락 시 blue).
- 기능이 추가됨에 따라 페이지가 늘어난다는 가정 하에 react router를 적용했습니다.

## 코드 개선 리팩토링

- customHook보다 일반 function이 나을 수도 있다 | https://idealstring.tistory.com/65
