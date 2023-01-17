import { useIsUp } from "../data-access/hooks/useIsUp";
import ColorSpan from "../style/ColorSpan";

const UpNDown = () => {
  const isUp = useIsUp();
  return <ColorSpan isUp={isUp}>{isUp ? "▲" : "▼"}</ColorSpan>;
};

export default UpNDown;
