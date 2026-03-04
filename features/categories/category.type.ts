import { SortValue } from "@/features/ui/sort.constant";

export type Category = { id: string; label: string; };

export interface CategoriesSearchParams {
  categoryId?: string;
  q?: string;
  sort?: SortValue<"group">;
  available?: "0" | "1";
}