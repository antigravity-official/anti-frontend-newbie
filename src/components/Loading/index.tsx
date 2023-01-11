import * as S from '@components/Loading/Loading.style';

interface LoadingPropsType extends S.AnimationPropsType {
  height: string;
}

const Loading = ({ height, color, size }: LoadingPropsType) => {
  return (
    <S.Wrapper height={height}>
      <S.Animation color={color} size={size} />
    </S.Wrapper>
  );
};

export default Loading;
