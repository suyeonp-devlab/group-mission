"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/AuthContext";
import LoadingScreen from "@/components/common/LoadingScreen";

/** Guards protected routes using client-side auth state */
export default function AuthGuard({children}: {
  children: React.ReactNode;
}) {

  const router = useRouter();
  const { user, isInitializing } = useAuth();

  useEffect(() => {
    if (!isInitializing && !user) router.replace("/login");
  }, [isInitializing, user, router]);


  if (isInitializing) return <LoadingScreen />;

  if (!user) return null;

  return <>{children}</>;
}