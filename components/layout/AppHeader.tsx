"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLayout } from "@/features/layout/LayoutContext";
import { Bell, MessageCircle, Search } from "lucide-react";

export default function AppHeader() {

  const router = useRouter();
  const { headerTitle } = useLayout();

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="mx-auto flex w-full max-w-screen-sm items-center justify-between px-4 py-3">
        {/* Left: Page title */}
        <div className="text-lg font-extrabold tracking-tight text-emerald-800 mt-1">
          {headerTitle}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            onClick={() => router.push("/app/search")}
            className="flex h-6 w-6 items-center justify-center"
          >
            <Search size={20} className="text-zinc-800" />
          </button>

          {/* Chat */}
          <button
            type="button"
            aria-label="Chat"
            onClick={() => router.push("/app/chat")}
            className="flex h-6 w-6 items-center justify-center"
          >
            <MessageCircle size={19} className="text-zinc-800 scale-x-[-1] " />
          </button>

          {/* Notification */}
          <button
            type="button"
            aria-label="Notifications"
            onClick={() => router.push("/app/notifications")}
            className="relative flex h-6 w-6 items-center justify-center"
          >
            <Bell size={20} className="text-zinc-800" />
            {/* TODO : 새로운 알림 존재 시 표출 */}
            <span className="absolute -top-[0.5px]  -right-1 h-1.5 w-1.5 rounded-full bg-red-500" />
          </button>
        </div>
      </div>
    </header>
  );
}