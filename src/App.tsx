import { QueryClient, QueryClientProvider } from "react-query";
import Exchange from "./components/Exchange";

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Exchange />
    </QueryClientProvider>
  );
};

export default App;
