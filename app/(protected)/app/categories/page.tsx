import LayoutConfig from "@/shared/system/layout/LayoutConfig";
import CategoryPage from "@/features/categories/CategoryPage";
import { GetGroupsRequest } from "@/features/groups/list/types/type";
import { getGroupCategories } from "@/features/categories/api/api";
import { getGroups } from "@/features/groups/list/api/api";
import { normalizeGetGroupsRequest } from "@/features/groups/list/utils/normalize";

export default async function Page({ searchParams } : {
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
      <CategoryPage
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