<p align="center"><img width="300" height=" 450" alt="Screen Shot 2022-10-31 at 3 44 15 PM" src="https://user-images.githubusercontent.com/53526987/213299269-9dae187e-916a-47cc-b3be-8c13e299a2c0.png">
</p>

<h2 align="center"><strong>FreeD 프론트엔드 과제 구현</strong></h2>

<br/>

# 1️⃣ 프로젝트 실행 방법

## Client

```
npm i
```

```
npm start
```

## .env

```
REACT_APP_API_ENDPOINT=https://quotation-api-cdn.dunamu.com
```

<br/><br/><br/>

# 2️⃣ 사용 기술 및 선택한 이유

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)<br/>

- 요구사항에 맞게 `React`를 사용했습니다.
- `React` 라이브러리의 경우, 가상 DOM을 통해 변경된 DOM 트리만 업데이트하도록 연산을 수행합니다. 따라서 실제 DOM의 리렌더링을 최적화할 수 있습니다.
- 컴포넌트 단위로 개발을 진행함으로써 유지보수와 생산성에 용이합니다.

<br/>
  
![TypeScript](https://img.shields.io/badge/typescript-004088.svg?style=for-the-badge&logo=typescript&logoColor=white)<br/>

- 요구사항에 맞게 `TypeScript`를 사용했습니다.
- 여러 컴포넌트, 로직등을 구현할 때 명시적으로 타입을 지정함으로써 오류를 방지할 수 있습니다.
- 백엔드와의 협업 과정에서 미리 데이터 타입을 정의함으로써 커뮤니케이션 오류를 방지할 수 있습니다.

<br/>

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)<br/>

- `Css`를 `Js`와 같이 컴포넌트화 해서 사용할 수 있습니다.
- 스타일 파일이 길어짐에 따라 가독성을 헤칠 것을 염려하여 `component.style.ts` 파일을 따로 생성하여 스타일을 정의했습니다.

<br/>

![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

<br/>

- 코드의 가독성을 위해 `prettier`을 사용헀습니다.

<br/><br/><br/>

# 3️⃣ 구현 사항

## 유로를 원으로 변환

요구 사항

- [x] any 를 사용하지 말고 Type을 지정해 주세요
- [x] 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요
- [x] 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)
- [x] 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.
- [x] 금액은 세자리 마다 콤마(,) 를 표시하세요
- [x] 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.
- [x] 비니지스 로직을 분리하고 MVVM 구현패턴을 적용하세요.

<br/><br/><br/>

# 4️⃣ 추가 구현

## 1. 디자인 시스템

<img width="846" alt="Screen Shot 2022-10-31 at 7 19 25 PM" src="https://user-images.githubusercontent.com/53526987/213304667-acfda05f-daca-4419-8093-a7b1c251bb8d.png">

- 구현을 위한 `figma`로 디자인 구성도 구축

<br/><br/><br/>

# 5️⃣ 이외 사항

## 1. 작업 단위

- 컴포넌트를 기준으로 작업 단위를 분리하여 개발하였습니다.(branch: feat/\*)

  <br/><br/>

## 2. 프로젝트 구조

### 구조도

```
📦src
 ┣ 📂apis
 ┃ ┣ 📜exchangeApi.ts
 ┃ ┗ 📜requestApi.ts
 ┣ 📂hooks
 ┃ ┗ 📜DebounceHook.ts
 ┣ 📂interfaces
 ┃ ┗ 📜exchange.d.ts
 ┣ 📂models
 ┃ ┗ 📜krwEurModel.ts
 ┣ 📂styles
 ┃ ┗ 📜global.style.ts
 ┣ 📂viewModels
 ┃ ┗ 📜krwEurViewModel.ts
 ┣ 📂views
 ┃ ┣ 📂EurInfosView
 ┃ ┃ ┣ 📜EurInfos.style.ts
 ┃ ┃ ┗ 📜EurInfos.tsx
 ┃ ┣ 📂ExchangeEurToKrwView
 ┃ ┃ ┣ 📜ExchangeEurToKrw.style.ts
 ┃ ┃ ┗ 📜ExchangeEurToKrw.tsx
 ┃ ┣ 📂ExchangeKrwEurSectionView
 ┃ ┃ ┣ 📜ExchangeKrwEurSection.style.ts
 ┃ ┃ ┗ 📜ExchangeKrwEurSection.tsx
 ┃ ┗ 📂Spinner
 ┃ ┃ ┣ 📜Spinner.style.ts
 ┃ ┃ ┗ 📜Spinner.tsx
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

<br/><br/>

## 3. Convention

### Commit Convention

- [Paeng Commit 블로그](https://gwpaeng.tistory.com/344?category=897135) 정리 및 참고
- Commit Type만 영어로 작성

```
feat: 새로운 기능 추가
chore: 빌드 업무 수정, 패키지 매니저 수정(자잘한 수정)
docs: 문서 수정
fix: 버그 수정
refactor: 코드 리펙토링
```

<br/>

### MVVM Folder & File Naming

```
📂models //데이터 관리 및 비지니스 로직
┗ 📜krwEurModel.ts
📂viewModels //View가 사용할 메서드 구현
┗ 📜krwEurViewModel.ts
📂views //사용자에게 보여지는 부분(UI)
┣ 📂EurInfosView
  ┣ 📜EurInfos.style.ts
  ┗ 📜EurInfos.tsx
```
