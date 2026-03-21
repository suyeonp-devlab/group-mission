"use client";

import { Lock } from "lucide-react";
import { MemberStatus } from "@/features/groups/detail/types/groupDetail.type";

interface GroupLockedPanel {
  status: MemberStatus | null;
  isEnd: boolean;
  onClick: () => void;
}

export default function GroupLockedPanel({
  status,
  isEnd,
  onClick
} : GroupLockedPanel){

  const disabled = status === "PENDING" || isEnd;

  const getGroupJoinButtonText = (): string => {
    if (status === "PENDING") return "승인 대기 중입니다";
    if (isEnd) return "모집이 마감되었어요";
    return "가입 신청하기";
  };

  return (
    <section className="mt-6 rounded-2xl bg-amber-50 px-4 py-4 ring-1 ring-amber-100">
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-amber-900">
          <Lock size={16} className="text-amber-600" />
          <p className="text-sm font-semibold mt-0.5">
            그룹 가입 후 확인할 수 있어요
          </p>
        </div>

        <p className="mt-2 text-sm leading-6 text-amber-800">
          그룹 소개를 먼저 확인해보고, 마음에 들면 가입해서 멤버들의 인증과 현재 진행 현황을 함께 확인해보세요.
        </p>

        <button
          type="button"
          disabled={disabled}
          className={`mt-4 w-full rounded-xl py-2.5 text-sm font-semibold transition ${disabled ? "bg-zinc-200 text-zinc-500" : "bg-zinc-900 text-white active:bg-zinc-800"}`}
          onClick={onClick}
        >
          {getGroupJoinButtonText()}
        </button>
      </div>
    </section>
  );
}