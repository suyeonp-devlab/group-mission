"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/shared/system/auth/AuthContext";
import { OverlayProvider } from "@/shared/system/overlay/OverlayContext";
import { createQueryClient } from "@/shared/system/query/queryClient";

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