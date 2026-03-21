import { Category } from "@/features/categories/types/type";

export const getCategoryThemeColor = (category: Category) => {
  return category.color ?? "#d4d4d4";
}