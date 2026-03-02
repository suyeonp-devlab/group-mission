"use client";

import React from "react";
import AppHeader from "@/components/layout/AppHeader";
import DetailHeader from "@/components/layout/DetailHeader";
import { useLayout } from "@/features/layout/LayoutContext";

/** Renders exactly one header based on layout state */
export default function HeaderSwitcher() {

  const { headerVariant, showHeader } = useLayout();

  if (!showHeader) return null

  return (headerVariant === "detail") ? <DetailHeader /> : <AppHeader />
}