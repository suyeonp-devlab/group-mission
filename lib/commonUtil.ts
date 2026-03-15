import { SummaryStatus } from "@/features/groups/group.type";
import { Category } from "@/features/categories/category.type";

export const normalizePin = (value?: string, maxLength = 6) => {
  return (value ?? "").replace(/\D/g, "").slice(0, maxLength);
};

export const getSummaryStatus = (count: number, completed: number): SummaryStatus => {
  if (count === 0) return "NONE";
  if (count === completed) return "DONE";
  return "ING";
};

export const formatDate = (dateString: string, format: string) => {
  const date = new Date(dateString);

  const yyyy = String(date.getFullYear());
  const MM = String(date.getMonth() + 1).padStart(2, "0");
  const M = String(date.getMonth() + 1);
  const dd = String(date.getDate()).padStart(2, "0");
  const d = String(date.getDate());

  return format
    .replace("yyyy", yyyy)
    .replace("MM", MM)
    .replace("M", M)
    .replace("dd", dd)
    .replace("d", d);
}

export const getCategoryThemeColor = (category: Category) => {
  return category.color ?? "#d4d4d";
}