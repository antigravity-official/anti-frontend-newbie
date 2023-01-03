import { useEffect, useState } from "react";

interface Props {
  message?: string;
}

const LoadingMessage = ({ message }: Props) => {
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

  return <div>{(message || "Loading") + progress}</div>;
};

export default LoadingMessage;
