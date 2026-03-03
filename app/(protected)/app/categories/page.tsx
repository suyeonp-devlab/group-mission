import LayoutConfig from "@/features/layout/LayoutConfig";
import CategoryClient from "@/features/categories/CategoryClient";
import { CategoriesSearchParams } from "@/features/categories/category.type";
import { MOCK_CATEGORIES } from "@/features/categories/category.mock";

export default async function CategoryPage({ searchParams } : {
  searchParams: Promise<CategoriesSearchParams>
}){

  const sp = await searchParams;

  const categoryId = sp.categoryId ?? "all";
  const q = sp.q ?? "";

  // TODO 서버 연동 (apply caching for categories)
  const categories = MOCK_CATEGORIES;

  return (
    <>
      {/* Set the page-specific layout configuration */}
      <LayoutConfig title="카테고리" />
      {/* Content */}
      <CategoryClient categories={categories} selectedCategory={categoryId} initialQuery={q} />
    </>
  );
}