import LayoutConfig from "@/features/layout/LayoutConfig";
import CategoryClient from "@/features/categories/CategoryClient";
import { CategoriesSearchParams } from "@/features/categories/category.type";
import { MOCK_CATEGORIES } from "@/features/categories/category.mock";
import { MOCK_GROUPS } from "@/features/groups/group.mock";

export default async function CategoryPage({ searchParams } : {
  searchParams: Promise<CategoriesSearchParams>
}){

  const sp = await searchParams;

  const categoryId = sp.categoryId ?? "all";
  const q = sp.q ?? "";
  const sort = sp.sort ?? "RECOMMENDED";
  const available = sp.available ?? "0";

  // TODO 서버 연동 (apply caching for categories)
  const categories = MOCK_CATEGORIES;

  // TODO 서버 연동
  const groups = MOCK_GROUPS
    .filter(g =>
      (categoryId === "all" || g.categoryId === categoryId) &&
      (q === "" || g.title.includes(q)) &&
      (available === "0" || g.memberCount < g.maxMembers)
    )
    .toSorted((a, b) => {
      switch (sort) {
        case "RECOMMENDED":
          return b.recommendedScore - a.recommendedScore;
        case "CREATED_DESC":
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        case "CREATED_ASC":
          return +new Date(a.createdAt) - +new Date(b.createdAt);
        default:
          return 0;
      }
    });

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="카테고리" navIcon="categories" />

      {/* Content */}
      <CategoryClient
        categories={categories}
        selectedCategory={categoryId}
        initialQuery={q}
        groups={groups}
        selectedSort={sort}
        initialAvailable={available}
      />
    </>
  );
}