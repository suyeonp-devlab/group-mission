import { Category } from "@/features/categories/category.type";

export const MOCK_CATEGORIES: Category[] = [
  { id: "all", label: "전체", badges: [] },
  { id: "01", label: "운동/식단", badges: [] },
  { id: "02", label: "공부/독서", badges: ["HOT", "NEW"] },
  { id: "03", label: "업무/생산성", badges: [] },
  { id: "04", label: "취미/창작", badges: ["NEW"] },
  { id: "05", label: "마음관리", badges: ["HOT"] },
  { id: "06", label: "생활/정리", badges: [] },
  { id: "07", label: "소비관리", badges: [] },
];