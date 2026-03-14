"use client";

import { Category } from "@/features/categories/category.type";
import { Group, MyGroupSummary } from "@/features/groups/group.type";
import SummaryDashboard from "@/features/home/SummaryDashboard";
import CategorySection from "@/features/home/CategorySection";
import QuickHelpSection from "@/features/home/QuickHelpSection";
import ScrollToTopButton from "@/components/button/ScrollToTopButton";
import GroupSection from "@/features/home/GroupSection";

interface HomeClientProps {
  categories: Category[];
  summary: MyGroupSummary | null;
  groups: Group[];
}

export default function HomeClient({
  categories,
  summary,
  groups
} : HomeClientProps) {

  return (
    <div className="bg-white">
      {/* Summary dashboard */}
      {summary && <SummaryDashboard summary={summary} />}

      {/* Categories */}
      {categories && <CategorySection categories={categories} />}

      {/* Recommend groups */}
      {groups && <GroupSection groups={groups} />}

      {/* Quick help */}
      <QuickHelpSection />

      {/* Scroll top button */}
      <ScrollToTopButton />
    </div>
  );
}