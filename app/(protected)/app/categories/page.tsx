import LayoutConfig from "@/features/layout/LayoutConfig";
import CategoryClient from "@/features/categories/CategoryClient";
import { GetGroupsRequest } from "@/features/groups/group.type";
import { getGroupCategories } from "@/features/categories/categories.api";
import { getGroups } from "@/features/groups/groups.api";
import { normalizeGetGroupsRequest } from "@/features/groups/groups.normalize";

export default async function CategoryPage({ searchParams } : {
  searchParams: Promise<GetGroupsRequest>
}){

  const sp = await searchParams;
  const normalized = normalizeGetGroupsRequest(sp);

  // TODO 서버 연동
  const [categories, { items: groups, totalCount }] = await Promise.all([
    getGroupCategories(),
    getGroups(normalized)
  ]);

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="카테고리" navIcon="categories" />

      {/* Content */}
      <CategoryClient
        // Do not use key — it causes a remount and breaks the tab animation/interaction.
        categories={categories}
        selectedCategory={normalized.categoryId}
        initialQuery={normalized.q}
        groups={groups}
        totalGroupCount={totalCount}
        selectedSort={normalized.sort}
        initialAvailable={normalized.available}
      />
    </>
  );
}