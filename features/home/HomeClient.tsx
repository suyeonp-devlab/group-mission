"use client";

import { Category } from "@/features/categories/category.type";
import { Group, MyGroupSummary } from "@/features/groups/group.type";
import SummaryDashboard from "@/features/home/SummaryDashboard";

interface HomeClientProps {
  categories: Category[];
  summary: MyGroupSummary | null;
  groups: Group[];
  totalGroupCount: number;
}

export default function HomeClient({
  categories,
  summary,
  groups,
  totalGroupCount
} : HomeClientProps) {

  return (
    <div className="bg-white">
      {/* Summary dashboard */}
      {summary && <SummaryDashboard summary={summary} />}
    </div>
  );
}