# 안티그래비티 프론트엔드 입사자 기술과제

![sample video](https://user-images.githubusercontent.com/95073450/213273225-b251f374-1ce1-40b3-a0c8-41ede90d0613.gif)

<br>

### 실행 방법

`git clone https://github.com/project-mizzu/anti-frontend-newbie.git` <br>
`npm install (--legacy-peer-deps)` <br>
`npm start`

<br>

### 디자인 시스템

![design system](https://user-images.githubusercontent.com/95073450/213270230-684e8a2f-2354-4598-9a79-428f15ca9e1e.png)

코드를 작성하기 전에 기능 요구사항이 필요한 것처럼, 디자인도 통일된 가이드가 필요합니다. <br>
피그마를 통해 작성한 디자인 시스템을 토대로 미리 시각적으로 컴포넌트 활용에 대한 인지를 해볼 수 있었으며, <br>
더 나아가 웹모바일 반응형 디자인 구현까지 미리 시도해 볼 수 있었습니다. <br>

<br>

### 사용한 기술

[![My Skills](https://skillicons.dev/icons?i=react,ts,styledcomponents,figma&perline=4)](https://skillicons.dev)

<br>

### 리팩토링 의도와 폴더구조

MVVM 패턴에서 View와 ViewModel은 Binder를 통하여 소통할 뿐, 서로 연결되지 않습니다. View와 ViewModel의 완전한 분리가 일어나지 않으면 MVVM 모델이라고 보기 어려우며, React는 처음부터 data와 view를 연결하여 작성하는 component 방식으로 구성되어 있기 때문에 완전한 MVVM의 적용이 이론상 불가능 합니다.

<br>

그래서 해당 과제에서는 component 재사용과 비즈니스 로직 분리를 중심으로 리팩토링을 진행 해보았습니다.

<br>

```
src
  @types
  assets
  conponents
  data
  interface
  style
  util
  view
```

#### 필수 수행 항목

- [x] any를 사용하지 말고 Type을 지정
- [x] 컴포넌트 분리하고, 적당한 폴더 만들어 파일 배치
- [x] 유로화 입력할 때마다 환율 반영하여 원화로 표시
- [x] 환율 정보 로딩중임을 사용자가 알 수 있도록 UI 추가
- [x] 금액 세자리 마다 콤마(,) 를 표시
- [x] 유로화 소수점 2자리까지 표시
- [x] 원화 소수점 표시하지 않음
- [x] 비니지스 로직을 분리하고 MVVM 구현패턴을 적용

#### 옵션 수행 항목

- [x] 비효율적으로 작성된 코드가 있다면 변경
- [ ] 테스트 코드를 작성

#### 추가 구현 목록

- 웹, 모바일 반응형 디자인 구현
- 월간 환율변동 차트 구현
- 디자인 시스템 제작
