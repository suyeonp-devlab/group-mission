"use client";

import React from "react";
import { useAuth } from "@/features/auth/AuthContext";
import LoadingScreen from "@/components/common/LoadingScreen";

/** Guards protected routes using client-side auth state */
export default function AuthGuard({children}: {
  children: React.ReactNode;
}) {

  const { user, isInitializing } = useAuth();

  if (isInitializing) return <LoadingScreen />;

  if (!user) return null;

  return <>{children}</>;
}