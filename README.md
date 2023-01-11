### 🚀 프로젝트 실행 방법
```git clone https://github.com/klmhyeonwoo/anti-frontend-newbie.git``` <br/>
```npm install``` <br/>
```npm start``` <br/>

### 🧀 사용한 기술
[![My Skills](https://skillicons.dev/icons?i=react,emotion,redux,ts)](https://skillicons.dev)

### 🧐 어떤 기술을 사용했고, 왜 이런 기술을 사용했나요?
##### - 데이터 패칭에 관련된 부분을 애플리케이션에서 액션과 리듀서 등을 각각 모아 비즈니스 로직을 분리함으로써 비즈니스 로직을 파악하기 쉽게하기 위해 Redux를 사용하였어요
##### - Redux Toolkit에 내장되어있는 Trunk를 사용하여 기존 코드에서 데이터에 대한 부분을 비동기 처리를 하였어요
##### - Promise가 이행된 상태라면 fulfilled 액션이 실행되고 loading 상태가 멈추고, (코드를 보여주는 식으로 설계를 하였어요 그 외에는 로딩중 및 콘솔창에 테스팅 코드로 확인 가능)
##### - <strong>현재는 프로젝트 양이 그리 많지는 않지만</strong>, 한 컴포넌트 안에서 CSS를 관리하기 위해 Emotion 라이브러리를 사용하였고 CSS in JS로 구현을 하였어요
##### - 자바스크립트는 런타임에서 오류를 체크하고, 타입스크립트는 컴파일 시점에서 타입의 오류를 제때 체크하여 사전에 오류를 방지해요 그래서 타입스크립트를 사용했어요
##### - 아직 많이 부족합니다, 그래도 빠르게 배우고 흥미를 느끼며 습득하는 중이에요! 그 외에 와이어프레임을 그리고 와이어프레임에 맞게 디자인을 했어요

### 📦 프로젝트 파일 구조 
```
📦 
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ src
│  ├─ App.tsx
│  ├─ app
│  │  └─ store.ts // redux 사용을 위한 store 파일이 들어있습니다.
│  ├component
│  │  └─ Index.tsx // 일반 Index 파일입니다.
│  ├─ custom.d.ts // 타입스크립트에서 이미지 파일을 가져오기 위한 custom.d.ts 파일입니다.
│  ├─ features
│  │  └─ fetcher
│  │     └─ fetcherSlice.ts // redux 사용을 위한 action 파일이 들어있습니다.
│  ├─ hooks
│  │  └─ UseEurInfo.tsx // 처음 프로젝트에서 데이터 패칭 테스트를 하기 위해 만든 파일입니다, 그다지 쓸모는 없습니다.
│  ├─ images
│  │  ├─ EUR.png
│  │  ├─ KOR.png
│  │  ├─ loading.gif
│  │  └─ women.png
│  ├─ index.tsx
│  └─ styles
│     └─ GlobalFont.tsx // Emotion 라이브러리에서의 전역 폰트를 사용하기 위해 만든 파일입니다.
├─ tsconfig.json
└─ tslint.json
```
