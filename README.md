안녕하세요 지원자 최명식입니다.

## 1. MVVM 패턴의 구현

스스로 이해하기 위해 Redux-toolkit 없이 React 로만 구현해보았습니다.

#### Model

```js
< src / App.tsx> 에 구현하였습니다.
 모든 값이 store 처럼 모이는 곳이자, View-Model 에 데이터를 넣어주는 역할을 합니다.
 Redux 없이 사용하여, 가장 상위 위치에 Model 을 두었습니다.
```

#### View

```js
< src / views / ...tsx > 에 구현하였습니다.
 View 는 오로지 UI 만을 다루며,  Action 을 View-Model  에 넣어줍니다.
 여기서 Action 은 onChange 를 사용한 Input값의 변화라고 생각했습니다.
```

#### View-Model

```js
< src / view-models / Euro-to-krw.tsx > 에 구현하였습니다.
 View-Model 은 View 로 부터 온 데이터를 처리하고, Model 에 값을 요청하며,
 Model 로 부터 받아온 값을 처리하여, 다시 View 로 넘겨주는 역할을 하게 만들었습니다.

 상향식 State 끌어올리기를 사용하여 View 의 값을 받아오고, 그 즉시 Model 에 넘기고,
 Model 의 값을 받아, 처리된 값을 곧바로 View 에 넘김으로써,
 양방향 바인딩을 구현해보았습니다.

 View 를 위한 데이터 처리 로직과, 데이터 fetch 도 이곳에서 이루어집니다.
```

#### Helper

```js
< src / helper / get-euro-info.tsx > 에 구현하였습니다.
 추가적으로 컴포넌트 Lean 을 구현하기 위해, fetch 를 외부의 함수로 빼서 사용했습니다.
 fetch 해서 오는 Type 도 이곳에서 export 합니다.
```

#### 기타사항

```js
 1. esLint의 npm  오류를 해결하기 위해, 현재 구동중인 React version 으로 변경하였습니다.
    그렇게 하면 안되는 것이었다면 죄송합니다..
 2. CSS 는 BEM 스타일을 사용해보았습니다. react의 버젼이 맞지 않아, module.css 가 아닌 일반 css로 스타일링을 구현하였습니다.
```
