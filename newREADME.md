할 일

- [x] Figma 디자인 작성
- [ ] Directory 구조 MVVM 패턴
- [ ] Type 지정
- [ ] 기능구현

  - [ ] 금액은 세자리 마다 콤마(,) 를 표시하세요
  - [ ] 유로화는 소수점 2자리까지 표시하고, 원화는 소수점을 표시하지 않습니다.)

- [ ] 로딩중 추가
- [ ] 코드 정리
      ----- 보너스

- [ ] Jest 테스트

---

MVVM Pattern
https://velog.io/@rjsdnql123/TILReact%EC%99%80-MVVM%ED%8C%A8%ED%84%B4

M(Model) - 데이터를 보관하고 있는 부분으로, 서버를 담당하고 있다.
V(View) - UI로직, 사용자의 눈에 보이는 인터페이스를 담당
VM(View Model) - Model에 데이터를 요청하고 가공한다.

MVVM 패턴을 사용하지 않은 이유

불필요한 데이터를 너무 많이 불러올 것 같아 패턴을 변경하게 되었습니다.

MVVM 패턴을 보면
Model로 데이터를 보관하고 ViewModel로 Model에 데이터를 요청하고 가공을 하고 View로 UI를 담당합니다.

구현을 해보니 초기에 Model과 ViewModel을 new로 생성하고 ViewModel을 component에 전달하여 관리하는 사용합니다.

즉,
**Model, ViewModel을 useEffect, useLayoutEffect에 넣어서 생성하지 않고 그냥 function 내부에서 생성을 하여 component의 넣어줍니다.**

그러면 **api로 불러온 데이터를 먼저 실행하고 Model에 넣어주어야 하는데 그러면 api를 너무 많이 불러와 비효율적**이라고 판단을 하였습니다.

그래서 