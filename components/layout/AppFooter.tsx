"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FOOTER_MENU } from "@/features/menu/footer.menu";

export default function AppFooter() {

  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/app") return pathname === "/app";
    return pathname.startsWith(href);
  };

  return (
    <nav aria-label="Bottom navigation" className="fixed inset-x-0 bottom-0 z-30 border-t border-gray-200 bg-white shadow-[0_-1px_6px_rgba(0,0,0,0.05)]">
      <div className="mx-auto grid w-full max-w-screen-sm grid-cols-4 py-3">
        {FOOTER_MENU.map((menu) => {
          const active = isActive(menu.href);

          return (
            <Link key={menu.href} href={menu.href} className="flex flex-col items-center justify-center gap-1">
              <Image src={menu.iconSrc} alt={menu.label} width={22} height={22} className={`block transition-opacity ${active ? "opacity-100" : "opacity-40"}`} />
              <span className={`text-[11px] transition-colors ${active ? "font-semibold text-black" : "text-black/50"}`}>
                {menu.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}