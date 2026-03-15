import { Category } from "@/features/categories/category.type";

export const MOCK_CATEGORIES: Category[] = [
  { id: "all", label: "전체", badges: [] },
  { id: "01", label: "운동/식단", badges: [], color: "#bef264" },
  { id: "02", label: "공부/독서", badges: ["HOT", "NEW"], color: "#93c5fd" },
  { id: "03", label: "업무/생산성", badges: [], color: "#a5b4fc" },
  { id: "04", label: "취미/창작", badges: ["NEW"], color: "#f9a8d4" },
  { id: "05", label: "마음관리", badges: ["HOT"], color: "#c4b5fd" },
  { id: "06", label: "생활/정리", badges: [], color: "#fcd34d" },
  { id: "07", label: "소비관리", badges: [], color: "#67e8f9" },
];