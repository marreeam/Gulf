// app/providers/ReactQueryProvider.tsx
"use client"; // must be client

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, ReactNode } from "react";

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  // Create QueryClient on first render only
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
