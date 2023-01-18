import ProductViewModel from "./presentation/View/ProductViewModel";
import GlobalStyles from "./styles/globalStyle";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <ProductViewModel />
    </div>
  );
};

export default App;
