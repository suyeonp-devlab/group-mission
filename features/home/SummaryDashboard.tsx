"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/AuthContext";
import { getMissionStatus } from "@/lib/commonUtil";
import { MISSION_STATUS_UI } from "@/features/groups/group.type";

interface SummaryDashboardProps {
  totalCount: number;
  doneCount: number;
  dailyCount: number;
  weeklyCount: number;
  monthlyCount: number;
}

export default function SummaryDashboard({
  totalCount,
  doneCount,
  dailyCount,
  weeklyCount,
  monthlyCount
} : SummaryDashboardProps){

  const router = useRouter();
  const { user } = useAuth();

  const status = getMissionStatus(totalCount, doneCount);
  const ui = MISSION_STATUS_UI[status];
  const Icon = ui.icon;

  const progress = totalCount === 0 ? 0 : (doneCount / totalCount) * 100;

  return (
    <section className="rounded-2xl bg-emerald-700 px-5 py-6 text-white shadow-sm ring-1 ring-emerald-800/20">
      {/* Intro text by status */}
      <h1 className="mt-2 text-xl font-bold leading-8 text-white">
        {user?.nickname && (<>{user.nickname}님,<br /></>)}
        <span className="flex items-center gap-2">
          {ui.title}
          <Icon size={20} className="opacity-90 text-emerald-300" />
        </span>
      </h1>

      {/* Mission summary */}
      <div className={`mt-5 rounded-2xl bg-emerald-600/70 ring-1 ring-white/10 backdrop-blur-sm px-4 ${status === "NONE" ? "py-3" : "py-4"}`}>

        {/* If there are no missions to participate in */}
        {status === "NONE" && (
          <p className="mt-1 text-sm text-emerald-50 text-center">
            미션에 참여하면 진행 상황을 볼 수 있어요
          </p>
        )}

        {/* If there are missions to participate in */}
        {status !== "NONE" && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">미션 요약</p>
              <span className="text-xs font-medium text-emerald-100">
                {doneCount} / {totalCount} 완료
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/15">
              <div
                className="h-full rounded-full bg-emerald-200 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-2xl bg-white/10 px-3 py-3 text-center ring-1 ring-white/8">
                <p className="text-[11px] font-medium text-emerald-100/75">일간</p>
                <p className="mt-1 text-base font-bold text-white">{dailyCount}개</p>
              </div>

              <div className="rounded-2xl bg-white/10 px-3 py-3 text-center ring-1 ring-white/8">
                <p className="text-[11px] font-medium text-emerald-100/75">주간</p>
                <p className="mt-1 text-base font-bold text-white">{weeklyCount}개</p>
              </div>

              <div className="rounded-2xl bg-white/10 px-3 py-3 text-center ring-1 ring-white/8">
                <p className="text-[11px] font-medium text-emerald-100/75">월간</p>
                <p className="mt-1 text-base font-bold text-white">{monthlyCount}개</p>
              </div>
            </div>
          </>
        )}

        {/* CTA button */}
        <button
          type="button"
          className={`inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 active:scale-[0.98] ${status === "NONE" ? "mt-3" : "mt-5"}`}
          onClick={() => router.push(ui.href)}
        >
          {ui.button}
        </button>
      </div>
    </section>
  );
}