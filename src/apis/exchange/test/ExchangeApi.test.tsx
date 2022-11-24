import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook } from "@testing-library/react-hooks";
import { useGetExchangeInfoByCodeQuery } from "../ExchangeApi.query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: { children: JSX.Element }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

test("API 테스트", async () => {
  const { result, waitFor } = renderHook(
    () => useGetExchangeInfoByCodeQuery("FRX.KRWEUR"),
    { wrapper }
  );
  await waitFor(() => expect(result.current.isSuccess).toBe(true), {
    timeout: 10000,
  });
});
