import { getMissionStatus } from "@/lib/commonUtil";
import { MISSION_STATUS_UI, MyGroupSummary } from "@/features/groups/group.type";
import SummaryStatusCard from "@/features/home/SummaryStatusCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SummaryDashboardProps {
  summary: MyGroupSummary
}

export default function SummaryDashboard({summary}: SummaryDashboardProps) {

  const {total, daily, weekly, monthly} = summary;

  const totalStatus = getMissionStatus(total.count, total.completed);

  const summaryUI = MISSION_STATUS_UI[totalStatus];

  return (
    <section className="rounded-md border border-emerald-400 bg-[#FFFCF6] px-4 py-4 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[18px] font-bold tracking-[-0.02em] text-gray-900">
            오늘의 미션 현황
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            {summaryUI.title}
          </p>
        </div>

        <Link href={summaryUI.href} className="flex items-center gap-1 text-xs font-medium text-emerald-700">
          {summaryUI.button}
          <ArrowRight size={12} />
        </Link>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        <SummaryStatusCard label="매일" count={daily.count} completed={daily.completed}/>
        <SummaryStatusCard label="매주" count={weekly.count} completed={weekly.completed}/>
        <SummaryStatusCard label="매월" count={monthly.count} completed={monthly.completed}/>
      </div>
    </section>
  );
}