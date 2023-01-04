import { PropsWithChildren, useEffect, useState } from "react";

interface Props {
  isLoading: boolean;
  message?: string;
}

const LoadingMessage = ({
  isLoading,
  message,
  children,
}: PropsWithChildren<Props>) => {
  const [progress, setProgress] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((state) => {
        if (state.length === 3) {
          return "";
        }
        return state + ".";
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <div>{(message || "Loading") + progress}</div>;

  return <>{children}</>;
};

export default LoadingMessage;
