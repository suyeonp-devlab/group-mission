import Link from "next/link";
import { Category } from "@/features/categories/category.type";

interface CategoryShortcutCard {
  category: Category;
}

export default function CategoryShortcutCard({ category } : CategoryShortcutCard){
  return(
    <Link
      href={`/app/categories?categoryId=${category.id}&q=&sort=RECOMMENDED&available=1`}
      className="relative flex min-h-14 items-center justify-center rounded-md px-3 py-4 text-xs font-semibold text-zinc-600 ring-1 ring-zinc-200 bg-zinc-50"
    >
      {category.label}

      {/* Category badges */}
      {category.badges.length > 0 && (
        <div className="absolute left-0 top-0 flex">
          {category.badges.map(b => (
            <span key={b} className={`px-1.5 py-px text-[9px] font-bold text-white ${b === "HOT" ? "bg-rose-500/70" : "bg-blue-500/70"}`}>
              {b}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}