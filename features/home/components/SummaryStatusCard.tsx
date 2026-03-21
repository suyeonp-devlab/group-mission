import { CircleCheckBig } from "lucide-react";

import { SummaryStatus } from "@/features/groups/my-groups/types/myGroup.type";
import { getSummaryStatus } from "@/features/groups/my-groups/utils/myGroup.util";

interface SummaryStatusCardProps {
  label: string;
  count: number;
  completed: number;
}

const STATUS_CLASS: Record<SummaryStatus, { background: string; text: string; }> = {
  NONE: { background: "border-slate-200 bg-slate-50", text: "text-slate-900" },
  ING: { background: "border-orange-200 bg-orange-50", text: "text-amber-600" },
  DONE: { background: "border-emerald-200 bg-emerald-50", text: "text-emerald-800" }
};

export default function SummaryStatusCard({
  label,
  count,
  completed
}: SummaryStatusCardProps) {

  const status = getSummaryStatus(count, completed);

  return (
    <div className={`relative overflow-hidden rounded-xl border px-3 py-2 text-center transition-colors ${STATUS_CLASS[status].background}`}>
      {status === "DONE" && (
        <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
          <CircleCheckBig size={48} strokeWidth={2.5} className="text-emerald-500 opacity-20" />
        </span>
      )}

      <p className={`text-[11px] font-medium ${STATUS_CLASS[status].text}`}>
        {label}
      </p>

      <p className={`mt-0.5 text-lg font-bold tracking-tight ${STATUS_CLASS[status].text}`}>
        {count}
      </p>
    </div>
  );
}