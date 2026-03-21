"use client";

type Tab<T extends string> = { id: T; label: string; };

interface SegmentedTabProps<T extends string> {
  tabs: readonly Tab<T>[];
  value: T;
  onChange: (v: T) => void;
}

/** A generic tab component for switching between multiple options */
export default function SegmentedTab<T extends string>({
  tabs,
  value,
  onChange,
}: SegmentedTabProps<T>) {

  return (
    <div className="border-b border-zinc-200 bg-white">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0,1fr))` }}
      >
        {tabs.map((t) =>
          <button
            key={t.id}
            type="button"
            onClick={() => onChange(t.id)}
            className={`relative py-3 text-sm font-medium transition-colors ${t.id === value ? "text-emerald-600" : "text-zinc-500 hover:text-zinc-900"}`}
          >
            {t.label}

            {/* underline */}
            <span className={`absolute left-0 bottom-0 h-0.5 w-full rounded-full transition-opacity ${t.id === value ? "bg-emerald-500 opacity-100" : "opacity-0"}`} />
          </button>
        )}
      </div>
    </div>
  );
}