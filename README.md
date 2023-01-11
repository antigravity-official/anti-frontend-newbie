## 안티그래비티 프론트엔드 입사자 기술과제

### 폴더 구조

```
│
└─src
    │  App.tsx
    │
    ├─components
    │      Loading.tsx
    │      TextInput.tsx
    │
    ├─hooks
    │      useFetchData.tsx
    │
    ├─model
    │      EurModel.ts
    │
    ├─types
    │      EurInfo.ts
    │      EurModel.ts
    │      HomeProp.ts
    │      TextInputProp.ts
    │
    ├─view
    │      Home.tsx
    │
    └─viewModel
            EurViewModel.ts

```

### 폴더 구조 설명

- **model**

 데이터 부분을 담당합니다. 데이터 변경 로직등을 작성하지만 이번 과제에서는 데이터가 변경되는 부분은 없기 때문에 가져온 데이터로 환전한 값을 보여주는 메서드나, 각각의 데이터를 가져오는 메서드등을 작성하였습니다.

- **viewModel**

 model과 상호작용 하면서 데이터가 변경되면 view로 보내는 역할을 합니다.

- **view**

  view는 로직을 분리하여 보이는 것만을 담당합니다. viewModel에 변화가 있다면 view는 변경된 데이터를 감지하고 화면에 보여줍니다.

- **types**

  따로 지정한 type들을 모아두었습니다.

- **components**

  components 폴더에는 loading UI 와 input을 담아두었습니다.

- **hooks**

  환율 API 데이터를 가져오는 로직을 hook으로 작성하였습니다.
  hook으로 가져온 데이터를 model 생성자를 통해 주입합니다.

### MVVM 패턴

데이터를 담당하는 model과 화면을 담당하는 view를 구분하여 로직을 분리하고 viewModel을 이용해서 view를 조작합니다. model에서 가져온 데이터를 viewModel의 생성자를 통해 주입하고 이 viewModel을 view에 prop으로 전달합니다. view는 prop으로 받은 데이터를 화면에 보여줍니다.


### 리팩토링

- 데이터 fetch 함수를 custom-hook으로 분리하여 추후 재사용성을 고려하였습니다.
- css는 css-in-JS 라이브러리인 styled-components를 사용하였습니다.
- 세 자릿수 콤마(,)와 소수점 표현은 내장 메서드인 toLocaleString, toFixed를 사용하여 구현하였습니다.
- 유로화에 정규표현식을 사용하여 숫자만 입력되도록 하였습니다.
- 데이터를 10초마다 갱신되도록 하여 최신 환율 정보를 볼 수 있도록 구현하였습니다
- 데이터를 가져오는 동안 Loading컴포넌트에 있는 spinner를 보여주도록 구현하였습니다.
- input을 컴포넌트로 분리하여 view에서 prop으로 간단하게 재사용할 수 있도록 구현하였습니다.
