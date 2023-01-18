# 안티그래비티 프론트엔드 입사자 기술과제

## 배포 URL

- URL :

<br>

## 프로젝트 소개

하나은행 api를 사용하여 환율계산기를 구현하였습니다.

<br>

## ⚒ 개발 기간

2022.01.16 ~ 2022.01.19

<br>

## ⚒ 개발 환경

### [사용한 라이브러리 및 프레임워크]

- React
  - 재사용가능한 컴포넌트 단위로 작성하기 위해 적용했습니다.
- Typescript
  - 타입기반의 안전한 프로그래밍을 위하여 적용했습니다.
- React-Query
  - 데이터 Fetching, 동기화, 로딩상태, 에러처리, 서버 쪽 데이터 업데이트 등 전역상태관리를 위해 적용했습니다.
- Styled Component

  - 동적인 스타일링과 스타일 재사용을 위해 적용했습니다.
    -React Spinners
  - api를 호출하고 데이터를 받아오는 동안 사용자들에게 로딩중이라는 것을 알리기 위해 적용했습니다.

    <br>

## 구현 내용

![screen-recording-_1_](https://user-images.githubusercontent.com/102465469/213189807-d4a77af7-05e6-42c8-98b4-34af90e5d2c2.gif)

실시간 환율정보를 받아와 화면에 그려줍니다.<br>
환율이 상승하면 화살표가 빨강색으로 하락하면 파랑색으로 변합니다.<br>
유로화를 입력할 때마다 원화로 계산이 되어 화면에 표시됩니다.<br>

<br>

![screen-recording-_2_](https://user-images.githubusercontent.com/102465469/213190539-6b2ebd3f-5a41-4ebb-97b6-c3ed3be97f7d.gif)

데이터가 로딩중일때 스피너를 보여줍니다. <br>
api 통신중 에러가 발생하면 에러메시지를 화면에 보여줍니다.

<br>

## 필수 수행 항목

- [x] any 를 사용하지 말고 Type을 지정해 주세요
- [x] 컴포넌트를 분리하고, 적당한 폴더를 만들어 파일들을 배치하세요
- [x] 유로화를 입력할 때마다 환율을 반영하여 원화로 표시해 주세요. (exchangeEurToKrw 함수를 사용하세요, 필요시 구현내용 변경 가능)
- [x] 환율 정보 로딩중임을 사용자가 알 수 있도록 UI를 추가해 주세요.
- [x] 금액은 세자리 마다 콤마(,) 를 표시하세요
- [x] 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.
- [x] 비니지스 로직을 분리하고 MVVM 구현패턴을 적용하세요.

## 옵션 수행 항목

- [x] 비효율적으로 작성된 코드가 있다면 변경하세요
- [ ] 테스트 코드를 작성하세요

<br>

## 리팩토링 의도와 구조

- MVVM 구현패턴을 적용하였습니다.
  - M : models라는 폴더를 만들어 데이터를 불러오는 로직을 작성하였습니다.
  - V : 비즈니스 로직을 제외한 오직 UI만 다루고 있습니다.
  - VM : models에서 가져온 데이터를 가공하여 비즈니스 로직을 View에게 props로 전달하고 있습니다.
- components 폴더를 만들어 재사용 가능한 컴포넌트를 관리하고 있습니다.
- api통신을 실패했을때 사용자에게 에러화면을 보여주어 사용자 경험을 개선시켰습니다.

<br>

## 파일 구조

```
📦src
 ┣ 📂@types
 ┃ ┗ 📂global
 ┣ 📂assets
 ┣ 📂models
 ┃ ┗ 📜api.tsx
 ┣ 📂presentation
 ┃ ┣ 📂Components
 ┃ ┃ ┣ 📂arrow
 ┃ ┃ ┣ 📂error
 ┃ ┃ ┣ 📂input
 ┃ ┃ ┗ 📂loading
 ┃ ┣ 📂View
 ┃ ┃ ┣ 📜ProductView.style.tsx
 ┃ ┃ ┣ 📜ProductView.tsx
 ┃ ┃ ┗ 📜ProductViewModel.tsx
 ┣ 📂styles
 ┃ ┣ 📜font.css
 ┃ ┣ 📜globalStyle.tsx
 ┃ ┗ 📜commonStyle.ts
 ┣ 📜App.tsx
 ┗ 📜index.tsx

<br>
```
