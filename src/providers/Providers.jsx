import React from "react";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import router from "../constants/routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      cacheTime: 0,
      refetchOnMount: "always",
    },
  },
});

const Providers = ({ children }) => {
  React.useEffect(() => {
    queryClient.invalidateQueries();
    queryClient.refetchQueries();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>{children}</RouterProvider>
    </QueryClientProvider>
  );
};

export default Providers;
