# 안티그래비티 프론트엔드 입사자 기술과제

이 프로젝트는 Typescript 언어를 사용하는 React 앱 입니다.

## 실행방법


## 과제

소스코드를 분리하고 유사성격의 파일들을 폴더별로 재배치 하세요

```
src
├─ App.tsx
├─ components
│  └─ Spinner.tsx
├─ index.tsx
├─ model
│  └─ EurInfoModel.ts
├─ types
│  └─ EurInfoType.ts
├─ view
│  ├─ EurInfoView.tsx
│  └─ ExchangeView.tsx
└─ viewModel
   ├─ EurInfoViewModel.ts
   ├─ ExchangeComaViewModel.ts
   └─ ExchangeViewModel.ts
```

#### 필수 수행 항목

1. any 를 사용하지 말고 Type을 지정해 주세요
- tpyes 폴더 내 EurInfoTpye 파일로 공통된 API 타입지정   
2. 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요
- view 폴더   
  - 화면을 구성하는 컴포넌트(EurInfoView.tsx,  ExchangeView.tsx)   
- model 폴더   
  - 데이터를 받아오는 파일 (EurInfoModel.ts)   
- viewModel 폴더   
  - 받아온 데이터를 처리하여 view로 내려주는 파일   
  - EurInfoViewModel : 1유로 기준 환율에 대한 데이터를 처리하여 EurInfoView 컴포넌트로 할당   
  - ExchangeComaViewModel : 세자리수 마다 콤마(,)를 표현해 줄 수 있는 파일   
  - ExchangeViewModel : 입력한 값에 따라 유로를 원화로 변경하여 ExchangeView 컴포넌트로 할당   
- components 폴더   
  - Spinner : 로딩중인 UI Spinner 컴포넌트 파일   
3. 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)
- ExchangeViewModel에서 입력된 값을 받아 exchangeEurToKrw 함수를 사용해 원화로 변경    
4. 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.
- 1초간 보여질 수 있도록 setTimeout메서드를 사용   
- react-spinners 라이브러리를 사용하여 로딩중 UI를 구현   
5. 금액은 세자리 마다 콤마(,) 를 표시하세요
- ExchangeComaViewModel에서 세자리 마다 콤마(,)를 표시하여 ExchangeView 컴포넌트로 할당   
6. 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.
7. 비니지스 로직을 분리하고 MVVM 구현패턴을 적용하세요.
- model : 데이터를 저장   
- viewModel : 저장된 데이터를 변경   
- view : Render되는 화면   


#### 옵션 수행 항목

1. 비효율적으로 작성된 코드가 있다면 변경하세요
2. 테스트 코드를 작성하세요

### 제출내용

1. git 레포지토리를 fork하여 작성한 후 PR을 보내세요
2. 리팩토링 의도와 구조에 대한 간략한 설명을 PR본문에 적어주세요


## 기타
- 디자인은 마음대로 변경하셔도 됩니다.
- 필요한 외부 라이브러리를 추가하여 사용하셔도 됩니다.
- 환율조회 api는 하나은행 제공 API를 사용하고 있습니다.


### 사용 라이브러리
- 디자인은 styled-components 라이브러리 사용   
  - 간단하게 css-in-js로 css 파일을 분리하지 않고 컴포넌트 형식으로 디자인을 작성할 수 있음   
- react-spinners 라이브러리 사용    
  - 로딩중 UI를 시각화하기 위해 사용    
