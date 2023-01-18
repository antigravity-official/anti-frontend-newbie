import * as S from "./Error.style";
import ErrorImg from "../../../assets/error.svg";

function Error({ error }: { error: string }) {
  return (
    <S.Container>
      <S.Image src={ErrorImg} alt="errorImage" />
      <S.ErrorText>{error}</S.ErrorText>
    </S.Container>
  );
}

export default Error;
