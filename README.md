## ✅ 전체 프로젝트 구조

- apis : api를 따로 분리하여 관리하기 쉽도록 했습니다.
- components: UI 컴포넌트들을 분리했습니다.
- hooks: 커스텀 훅을 분리한 곳입니다. selector, dispatch hook을 생성했습니다.
- pages: 화면에 보여질 page 컴포넌트 입니다.
- store: Reducer, store가 있는 폴더 있습니다.
- styles: global 스타일 theme 설정이 있는 파일입니다.
- types: 공통으로 사용하는 타입들을 관리하는 곳입니다.

```
src
┣ apis
┣ components
┃ ┣ Header
┃ ┣ Input
┃ ┣ Layout
┃ ┣ RateTable
┃ ┗ index.ts
┣ hooks
┃ ┗ useStore.ts
┣ pages
┃ ┣ Home
┃ ┗ index.ts
┣ store
┃ ┣ modules
┃ ┃ ┣ euroInfo
┃ ┃ ┗ index.ts
┃ ┗ index.ts
┣ styles
┃ ┣ global.style.ts
┃ ┣ styled.d.ts
┃ ┗ theme.ts
┣ types
┃ ┗ euroInfo.ts
┣ App.tsx
┗ index.tsx
```

## ✅ 추가 사용 라이브러리

- styled-components : 스타일을 컴포넌트화 하여 재사용성을 높였습니다.
- uiball/loaders : 로더 라이브러리를 활용하여 api 데이터가 로드 되기 전 로딩 UI를 구현했습니다.
- axios : axios 라이브러리로 Api 데이터를 받아왔습니다.
- react-redux, redux-toolkit : redux와 redux-toolkit으로 전역상태관리와 MVVM 패턴을 구현 했습니다.

## 필수 수행 항목

### 1. any 를 사용하지 말고 Type을 지정해 주세요

#### 1) euro 환율 정보 API 데이터 타입 지정

기존에 any 타입으로 지정되어 있었던 euroInfo state의 타입을 지정해주었습니다. 프로젝트에 사용할 데이터만 타입을 지정해주었고, 여러 곳에서 사용 할 것이기 때문에 따로 types 폴더를 만들어 배치해 두었습니다.

```
src
┣ types
┃ ┗ euroInfo.ts
```

#### 2) input Event에 타입 지정

`input Change` 이벤트와 `Keyup` 이벤트에 각각 `ChangeEvent`, `KeyboardEvent` 타입을 지정해주었습니다.

#### 3) store initial value 타입 지정

euro 환율 정보를 저장하는 `store`의 `initial value`의 타입을 지정해주었습니다.

### 2. 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요

컴포넌트는 `Header`, `Input`, `Layout`, `RateTable`(고시환율 테이블)로 분리 했습니다. components 폴더에 따로 분리 하였고 스타일이 길어지는 경우 가독성을 고려하여 스타일 컴포넌트도 따로 파일로 분리했습니다.

```
components
┣ Header
┃ ┗ index.tsx
┣ Input
┃ ┣ index.tsx
┃ ┗ style.tsx
┣ Layout
┃ ┗ index.tsx
┣ RateTable
┃ ┣ index.tsx
┃ ┗ style.tsx
┗ index.ts
```

✅ Header와 Layout은 기본 프레임으로 공통 적용 되는 부분이므로 분리했습니다.

✅ Input은 따로 커스텀 스타일을 만들어서 적용하기 위해 분리했습니다.

✅ RateTable은 코드가 길어짐에 따라 가독성을 높이기 위해 분리했습니다.

✅ page 분리

> 실제로 화면에 보여질 페이지를 pages 폴더로 분리해서 Home 컴포넌트를 생성했습니다.
> components에 분리한 컴포넌트들을 Home 컴포넌트에서 조립하여 사용합니다.
> 그리고 최종적으로 App 컴포넌트에서는 Home 컴포넌트 하나만 렌더링 함으로써 가독성을 향상시켰습니다.

### 3. 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)

`exchangeEurToKrw` 함수를 활용하여 input의 `onChange` 이벤트로 적용했습니다.

### 4. 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.

uiball/loaders 라이브러리를 활용해서 로더 UI를 구현했습니다.

#### 로더 구현 과정

- redux-toolkit의 createAsyncThunk를 활용해서 미들웨어를 구현했습니다.
- extraReducers로 pending, fullfilled, rejected 각 단계별로 state를 변화시킵니다.
- pending 단계에서 isLoading state가 true로 세팅됩니다.
- Home 컴포넌트에서 isLoading이 true면 로딩 UI를 노출시키고 false면 받아온 데이터를 바탕으로 콘텐츠 컴포넌트들을 렌더링 해줍니다.

#### 5. 금액은 세자리 마다 콤마(,) 를 표시하세요. 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.

`inputFormat`이라는 함수로 입력된 값을 포매팅하는 함수를 만들었습니다.

```javascript
const inputFormat = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //현재 입력받은 값에서 숫자와 마침표가 아닌 모든 값들은 빈값으로 치환해줍니다
  e.currentTarget.value = e.currentTarget.value.replace(/[^-\.0-9]/g, '')
  const countNumberThree = new RegExp(/(-?\d+)(\d{3})/)
  const pointIdx = e.currentTarget.value.indexOf('.', 0)
  const splitPoint = e.currentTarget.value.split('.') // 정수와 소수점뒤의 숫자를 분리 해줍니다.

  // 정수부분의 숫자를 3자리마다 콤마를 찍어줍니다
  while (countNumberThree.test(splitPoint[0])) {
    splitPoint[0] = splitPoint[0].replace(countNumberThree, '$1,$2')
  }

  //소수점이 있으면 두자리까지만 표현될 수 있도록 해줍니다.
  if (pointIdx > -1) {
    e.currentTarget.value = splitPoint[0] + '.' + splitPoint[1].substring(0, 2)
  } else {
    e.currentTarget.value = splitPoint[0]
  }
}
```

### 6. 비니지스 로직을 분리하고 MVVM 구현패턴을 적용하세요.

MVVM 패턴을 구현하기 위해 React-Redux와 Redux-toolkit을 활용했습니다.

#### View

pages/Home 컴포넌트에서 UI를 구현했습니다.

#### Model

store/modules에 euroInfo slicer를 구현했습니다. 그리고 modules 폴더 최상위 index에서 rootReducer를 만들어 euroInfo reducer를 등록해주었습니다.

#### ViewModel

store/index.ts에서 Module에서 만든 rootReducer를 가져와 store를 생성해줍니다.

그리고 최상위 루트 index.tsx에서 Provider로 store를 프로젝트에서 사용 할 수 있도록 해줬습니다.

### ⭐️ 성능 개선 작업

초기에 유로를 원화를 변경시킬때, 변경된 원화값은 state에 저장했습니다. 그리고 그 state 값을 원화 input의 value로 지정해 주었는데 `onChange`이벤트가 실행될 때마다 state를 변경시키니 해당 페이지에 있는 모든 컴포넌트가 리렌더링 되는 것을 발견 했습니다.

따라서 state로 value값을 지정하지 않고, `useRef`로 원화 input을 참조값을 가져와 value를 지정해주는 것으로 변경했습니다.

변경 이후에는 기타 컴포넌트들의 불필요한 리렌더링이 없어졌습니다.

### ⭐️ 추가 구현 사항

styled-component의 theme을 활용하여 반응형으로 제작하였습니다.
