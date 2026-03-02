"use client";

import { useEffect } from "react";
import { HeaderVariant, useLayout } from "@/features/layout/LayoutContext";

type LayoutConfigProps = {
  title?: string;
  headerVariant?: HeaderVariant;
  showFooter?: boolean;
  showHeader?: boolean;
  resetOnUnmount?: boolean;
};

const DEFAULTS = {
  title: "GROUP MISSION",
  headerVariant: "default" as const,
  showFooter: true,
  showHeader: true,
};

/** Configures layout-level UI state (header, footer, title) for the current page */
export default function LayoutConfig({
  title,
  headerVariant,
  showFooter,
  showHeader,
  resetOnUnmount = true,
}: LayoutConfigProps) {

  const { setHeaderTitle, setHeaderVariant, setShowFooter, setShowHeader } = useLayout();

  useEffect(() => {
    if(title !== undefined) setHeaderTitle(title);
    if(headerVariant !== undefined) setHeaderVariant(headerVariant);
    if(showFooter !== undefined) setShowFooter(showFooter);
    if(showHeader !== undefined) setShowHeader(showHeader);

    if (!resetOnUnmount) return;

    return () => {
      setHeaderTitle(DEFAULTS.title);
      setHeaderVariant(DEFAULTS.headerVariant);
      setShowFooter(DEFAULTS.showFooter);
      setShowHeader(DEFAULTS.showHeader);
    };
  }, [title, headerVariant, showFooter, showHeader, resetOnUnmount, setHeaderTitle, setHeaderVariant, setShowFooter, setShowHeader]);

  return null;
}