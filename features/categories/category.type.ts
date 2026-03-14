export type CategoryBadge = "HOT" | "NEW";

export interface Category {
  id: string;
  label: string;
  badges: CategoryBadge[]
}