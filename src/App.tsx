import { Provider } from "./provider/index";
import { GlobalStyle } from "./styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider />
    </>
  );
};

export default App;
