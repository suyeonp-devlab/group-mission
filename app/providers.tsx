"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/features/auth/AuthContext";
import { OverlayProvider } from "@/features/overlay/OverlayContext";
import { createQueryClient } from "@/lib/query/queryClient";

export default function Providers({ children }: PropsWithChildren) {

  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <OverlayProvider>
          {children}
        </OverlayProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}