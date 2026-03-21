import { Category } from "@/features/categories/types/type";
import CategoryShortcutCard from "@/features/categories/components/CategoryShortcutCard";

interface CategorySectionProps {
  categories: Category[];
}

export default function CategorySection({ categories } : CategorySectionProps){

  return (
    <section className="mt-8">
      <div className="mb-3">
        <h2 className="text-[15px] font-semibold tracking-tight text-zinc-900">
          미션 카테고리
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          관심있는 분야에서 새로운 미션을 찾아보세요
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {categories.map((c) => (
          <CategoryShortcutCard key={c.id} category={c} />
        ))}
      </div>
    </section>
  );
}