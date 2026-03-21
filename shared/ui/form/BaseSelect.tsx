"use client";

interface SelectOption<T extends string> {
  value: T;
  label: string;
}

interface BaseSelectProps<T extends string> {
  value: T;
  onChange: (value: T) => void;
  options: readonly SelectOption<T>[];
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
}

export default function BaseSelect<T extends string>({
  value,
  onChange,
  options,
  placeholder,
  className,
  ariaLabel = ""
}: BaseSelectProps<T>) {

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className={`h-12 w-full rounded-lg border border-zinc-200 bg-white pl-2 px-4 pr-8 text-sm text-zinc-800 outline-none transition appearance-none bg-[url('/icons/arrow-down.svg')] bg-no-repeat bg-size-[10px_10px] bg-position-[right_10px_center] focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100 ${className}`}
      aria-label={ariaLabel}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}