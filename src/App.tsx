import { GlobalStyle } from "styles/global.style";
import { theme } from "styles/theme";
import { Home } from "pages";
import { ThemeProvider } from "styled-components";
import { Layout } from "components";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Home />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
