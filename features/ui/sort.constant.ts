export type SortType = keyof typeof SORT_OPTIONS;
export type SortValue<T extends SortType> = (typeof SORT_OPTIONS)[T][number]["value"];

export const SORT_OPTIONS = {
  group: [
    { value: "RECOMMENDED", label: "추천순" },
    { value: "CREATED_DESC", label: "최신순" },
    { value: "CREATED_ASC", label: "등록순" },
  ]
} as const;
