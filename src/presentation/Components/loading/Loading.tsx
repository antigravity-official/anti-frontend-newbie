import { FadeLoader } from "react-spinners";
import * as S from "./Loading.style";

function Loading() {
  return (
    <S.Container>
      <FadeLoader color="#1a56f3" height={10} width={10} />
    </S.Container>
  );
}

export default Loading;
