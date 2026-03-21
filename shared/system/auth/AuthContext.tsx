"use client";

import { createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { User } from "@/features/auth/types/type";
import { getLoginUserInfo, processLogin, processLogout } from "@/features/auth/api/api";
import { hasCookie, LOGIN_COOKIE } from "@/shared/lib/cookie";

type AuthContextValue = {
  user: User | null;
  isLoggedIn: boolean;
  isInitializing: boolean;
  signIn: () => Promise<void>;
  signOut: () => void;
  refreshAuth: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/** AuthProvider controls authentication state */
export function AuthProvider({ children }: PropsWithChildren) {

  const [user, setUser] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const signOut = useCallback(() => {
    processLogout();
    setUser(null);
  }, []);

  const refreshAuth = useCallback(async () => {
    try {
      const user = getLoginUserInfo();
      setUser(user);
    } catch (error) {
      signOut(); // invalid login → delete cookies + log out
      throw error;
    }
  }, [signOut]);

  const signIn = useCallback(async () => {
    processLogin();
    await refreshAuth();
  }, [refreshAuth]);

  const bootstrapAuth = useCallback(async () => {

    if (!hasCookie(LOGIN_COOKIE)) {
      setUser(null);
      setIsInitializing(false);
      return;
    }

    try {
      // Ensure a minimum loading duration to prevent UI flicker
      await Promise.all([
        refreshAuth(),
        new Promise(resolve => setTimeout(resolve, 1500))
      ]);
    } finally {
      setIsInitializing(false);
    }
  }, [refreshAuth]);

  // Restore login status when the app starts
  useEffect(() => {
    void bootstrapAuth();
  }, [bootstrapAuth]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isLoggedIn: !!user,
      isInitializing,
      signIn,
      signOut,
      refreshAuth,
    }),
    [user, isInitializing, signIn, signOut, refreshAuth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/** Access authentication state inside protected auth scope */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within <AuthProvider />");
  }
  return context;
};