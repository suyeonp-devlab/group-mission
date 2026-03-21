"use client";

import { SORT_OPTIONS, SortType, SortValue } from "@/shared/config/sort";

interface SortSelectProps<T extends SortType> {
  sortType: T;
  value: SortValue<T>;
  onChange: (value: SortValue<T>) => void;
  className?: string;
}

export default function SortSelect<T extends SortType>({
  sortType,
  value,
  onChange,
  className
}: SortSelectProps<T>) {

  const options = SORT_OPTIONS[sortType];

  if(!options) return null;

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SortValue<T>)}
      className={`h-8 rounded-lg border border-zinc-200 bg-white px-4 pr-8 text-xs text-zinc-800 outline-none transition appearance-none bg-[url('/icons/arrow-down.svg')] bg-no-repeat bg-[length:10px_10px] bg-[position:right_10px_center] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 ${className}`}
      aria-label="정렬"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}