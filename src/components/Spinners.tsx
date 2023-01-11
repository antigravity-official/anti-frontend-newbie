import { useState, CSSProperties } from "react";
import { FadeLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

export const Spinners = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#000000");
  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        margin={5}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
