import React from "react";
import { LayoutProvider } from "@/features/layout/LayoutContext";
import HeaderSwitcher from "@/components/layout/HeaderSwitcher";
import AppFooter from "@/components/layout/AppFooter";
import AuthGuard from "@/features/auth/AuthGuard";

export default function ProtectedLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <LayoutProvider>
        <HeaderSwitcher />
        <main className="mx-auto w-full max-w-screen-sm px-4 py-4 pb-24">
          {children}
        </main>
        <AppFooter />
      </LayoutProvider>
    </AuthGuard>
  );
}