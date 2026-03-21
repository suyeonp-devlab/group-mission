"use client";

import React from "react";
import { useAuth } from "@/shared/system/auth/AuthContext";
import AuthLoadingScreen from "@/shared/system/auth/AuthLoadingScreen";

/** Guards protected routes using client-side auth state */
export default function AuthGuard({children}: {
  children: React.ReactNode;
}) {

  const { user, isInitializing } = useAuth();

  if (isInitializing) return <AuthLoadingScreen />;

  if (!user) return null;

  return <>{children}</>;
}