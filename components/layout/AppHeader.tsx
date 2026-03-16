"use client";

import React from "react";
import { useLayout } from "@/features/layout/LayoutContext";
import { Bell } from "lucide-react";
import Link from "next/link";
import { useNotificationMetaQuery } from "@/features/notifications/notification.query";

export default function AppHeader() {

  const { headerTitle } = useLayout();

  const { data } = useNotificationMetaQuery();
  const hasUnread = data?.hasUnread ?? false;

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="mx-auto flex w-full max-w-screen-sm items-center justify-between px-4 py-3">
        {/* Left: Page title */}
        <div className="text-lg font-extrabold tracking-tight text-emerald-800 mt-1">
          {headerTitle}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          {/* Notification */}
          <Link
            href="/app/notifications"
            aria-label="Notifications"
            className="relative flex h-6 w-6 items-center justify-center"
          >
            <Bell size={20} className="text-zinc-800" />

            {hasUnread && (
              <span className="absolute -top-[0.5px] -right-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}