import { LoadingProps } from "../../types/types";

export const Loading = ({ isFetching }: LoadingProps) => {
  if (!isFetching) return <div>Loading...</div>;
  return <></>;
};
