import React, { ReactNode } from "react";

interface Props {
  isLoading: boolean;
  children: ReactNode;
  loadingContent: ReactNode;
}

const Spinner: React.FC<Props> = ({ isLoading, children, loadingContent }) => {
  if (isLoading) {
    return <div>{loadingContent}</div>;
  }
  return <div>{children}</div>;
};
export default Spinner;
