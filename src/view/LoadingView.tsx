interface Props {
  isDataFetched: Promise<boolean>;
}
export const LoadingView = ({ isDataFetched }: Props) => {
  if (isDataFetched === undefined || Promise<false>) return <div>로딩중</div>;
  return <></>;
};
