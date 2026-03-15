"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

export type HeaderVariant = "default" | "detail";
export type NavIcon = "categories" | "home" | "chat" | "mypage";

type LayoutContextValue = {
  headerTitle: string;
  setHeaderTitle: (title: string) => void;
  headerVariant: HeaderVariant;
  setHeaderVariant: (variant: HeaderVariant) => void;
  showHeader: boolean;
  setShowHeader: (show: boolean) => void;
  showFooter: boolean;
  setShowFooter: (show: boolean) => void;
  activeNavIcon: NavIcon;
  setActiveNavIcon: (icon: NavIcon) => void;
};

const LayoutContext = createContext<LayoutContextValue | null>(null);

/** LayoutProvider controls layout-level UI state */
export function LayoutProvider({ children }: { children: React.ReactNode }) {

  const [headerTitle, setHeaderTitle] = useState("GROUP MISSION");
  const [headerVariant, setHeaderVariant] = useState<HeaderVariant>("default");
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [activeNavIcon, setActiveNavIcon] = useState<NavIcon>("home");

  const value = useMemo(
    () => ({
      headerTitle,
      setHeaderTitle,
      headerVariant,
      setHeaderVariant,
      showHeader,
      setShowHeader,
      showFooter,
      setShowFooter,
      activeNavIcon,
      setActiveNavIcon
    }),
    [headerTitle, headerVariant, showHeader, showFooter, activeNavIcon]
  );

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}

/** Access layout state inside protected layout scope */
export function useLayout() {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within <LayoutProvider />");
  }
  return context;
}