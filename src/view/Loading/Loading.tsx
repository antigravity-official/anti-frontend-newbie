import { LoadingProps } from "../../types/Props";

export const Loading = ({ isReady }: LoadingProps) => {
  if (!isReady) return <div>Loading...</div>;
  return <></>;
};
