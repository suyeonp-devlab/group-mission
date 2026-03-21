import React from "react";

export default function AuthLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main className="relative min-h-dvh overflow-hidden">
      {/* Background (below everything) */}
      <div className="absolute inset-0 -z-20 bg-linear-to-br from-emerald-50 via-sky-50 to-white" />

      {/* Content */}
      {children}
    </main>
  );
}
