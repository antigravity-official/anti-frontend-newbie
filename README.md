# 안티그래비티 프론트엔드 입사자 기술과제

이 프로젝트는 Typescript 언어를 사용하는 React 앱 입니다.
<br />

## 💡실행방법

```
npm i
npm start
```

<br />

## 📌폴더구조

```
📦src
 ┣ 📂model
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜exchange.ts
 ┃ ┗ 📜type.ts
 ┣ 📂styles
 ┃ ┣ 📂Info
 ┃ ┃ ┣ 📜DealInfo.tsx
 ┃ ┃ ┣ 📜ExchangeCurrentBox.tsx
 ┃ ┃ ┗ 📜ExchangeCurrentInfo.tsx
 ┃ ┣ 📂InputPageStyle
 ┃ ┃ ┗ 📜InputSection.tsx
 ┃ ┣ 📂Loading
 ┃ ┃ ┗ 📜LoadingMsg.tsx
 ┃ ┗ 📂Main
 ┃ ┃ ┣ 📜BoxStyle.tsx
 ┃ ┃ ┗ 📜GlobalStyle.jsx
 ┣ 📂view
 ┃ ┗ 📂component
 ┃ ┃ ┣ 📂Info
 ┃ ┃ ┃ ┣ 📜CurrentDealInfo.tsx
 ┃ ┃ ┃ ┣ 📜DealDate.tsx
 ┃ ┃ ┃ ┗ 📜ExchangeCurrentInfo.tsx
 ┃ ┃ ┣ 📂Loading
 ┃ ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┃ ┗ 📂Main
 ┃ ┃ ┃ ┗ 📜Main.tsx
 ┣ 📂viewmodel
 ┃ ┗ 📂CurrentInputViewModel
 ┃ ┃ ┗ 📜ExchangeInput.tsx
 ┗ 📜index.tsx

```

<br />

## 📌시연영상

<img src="https://user-images.githubusercontent.com/107825260/211732015-30da3819-9838-4e37-92f6-645410a3729e.gif">
<br />

## 🛠사용기술

<div align=left>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white" >
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" >
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white" >
<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white" >
 </div>

<br />

<details>
    <summary>과제 수행 항목 - 자세히보기</summary>

## 과제

소스코드를 분리하고 유사성격의 파일들을 폴더별로 재배치 하세요

#### 필수 수행 항목

1. any 를 사용하지 말고 Type을 지정해 주세요
2. 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요
3. 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)
4. 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.
5. 금액은 세자리 마다 콤마(,) 를 표시하세요
6. 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.
7. 비니지스 로직을 분리하고 MVVM 구현패턴을 적용하세요.

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

</details>
