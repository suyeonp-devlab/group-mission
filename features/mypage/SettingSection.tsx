import { ChevronRight, Lock, LogOut, MessageCircleQuestion, Trash2 } from "lucide-react";

export default function SettingSection() {

  return (
    <section className="mt-1">
      <button className="flex w-full items-center justify-between py-4 border-b border-zinc-100 active:bg-zinc-50">
        <div className="flex items-center gap-3">
          <Lock size={16} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">화면 잠금 설정</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </button>

      <button className="flex w-full items-center justify-between py-4 border-b border-zinc-100 active:bg-zinc-50">
        <div className="flex items-center gap-3">
          <MessageCircleQuestion size={16} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">고객센터 문의</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </button>

      <button className="flex w-full items-center justify-between py-4 border-b border-zinc-100 active:bg-zinc-50">
        <div className="flex items-center gap-3">
          <Trash2 size={18} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">계정 탈퇴</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </button>

      <button className="flex w-full items-center justify-between py-4 active:bg-zinc-50">
        <div className="flex items-center gap-3">
          <LogOut size={16} className="text-zinc-500" />
          <span className="text-sm text-zinc-800">로그아웃</span>
        </div>
        <ChevronRight size={18} className="text-zinc-400" />
      </button>
    </section>
  );
}