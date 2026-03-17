"use client";

import { ChevronRight, Lock, LogOut, MessageCircleQuestion, Trash2 } from "lucide-react";
import { useAuth } from "@/features/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useOverlay } from "@/features/overlay/OverlayContext";
import { deleteAccount } from "@/features/auth/auth.api";
import Link from "next/link";

export default function SettingSection() {

  const router = useRouter();
  const { signOut } = useAuth();

  const { confirm } = useOverlay();

  const handleSingOut = async () => {

    const confirmed = await confirm({
      title: "로그아웃",
      description: "로그아웃 하시겠습니까?\n현재 계정에서 로그아웃됩니다."
    });

    if(!confirmed) return;

    signOut();
    router.replace("/");
  }

  const handleDeleteAccount = async () => {

    const confirmed = await confirm({
      title: "계정 탈퇴",
      description: "정말로 탈퇴하시겠습니까?\n탈퇴 시 모든 데이터가 삭제되며\n복구할 수 없습니다.",
      confirmText: "탈퇴하기",
      confirmVariant: "danger"
    });

    if (!confirmed) return;

    await deleteAccount();
    signOut();
    router.replace("/");
  };

  return (
    <section className="mt-1">
      <button className="flex w-full items-center justify-between py-4 border-b border-zinc-100 active:bg-zinc-50">
        <div className="flex items-center gap-3">
          <Lock size={16} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">화면 잠금 설정</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </button>

      <Link
        href="/app/support"
        className="flex w-full items-center justify-between py-4 border-b border-zinc-100 active:bg-zinc-50"
      >
        <div className="flex items-center gap-3">
          <MessageCircleQuestion size={16} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">고객센터 문의</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </Link>

      <button
        className="flex w-full items-center justify-between py-4 border-b border-zinc-100 active:bg-zinc-50"
        onClick={handleDeleteAccount}
      >
        <div className="flex items-center gap-3">
          <Trash2 size={18} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">계정 탈퇴</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </button>

      <button
        className="flex w-full items-center justify-between pt-4 active:bg-zinc-50"
        onClick={handleSingOut}
      >
        <div className="flex items-center gap-3">
          <LogOut size={16} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">로그아웃</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </button>
    </section>
  );
}