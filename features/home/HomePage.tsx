"use client";

import { Category } from "@/features/categories/types/category.type";
import { Group } from "@/features/groups/list/types/group.type";
import SummaryDashboard from "@/features/home/components/SummaryDashboard";
import CategorySection from "@/features/home/components/CategorySection";
import QuickHelpSection from "@/features/home/components/QuickHelpSection";
import ScrollToTopButton from "@/shared/ui/button/ScrollToTopButton";
import GroupSection from "@/features/home/components/GroupSection";
import { MyGroupSummary } from "@/features/groups/my-groups/types/myGroup.type";

interface HomePageProps {
  categories: Category[];
  summary: MyGroupSummary | null;
  groups: Group[];
}

export default function HomePage({
  categories,
  summary,
  groups
} : HomePageProps) {

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