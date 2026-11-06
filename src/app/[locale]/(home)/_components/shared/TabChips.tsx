"use client";

export default function TabChips<T extends string>({
  tabs,
  value,
  onChange,
  getLabel,
}: {
  tabs: readonly T[];
  value: T;
  onChange: (tab: T) => void;
  getLabel: (tab: T) => string;
}) {
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab}
          onClick={() => onChange(tab)}
          className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-sm border transition-colors ${value === tab
              ? "bg-primary text-primary-foreground border-primary"
              : "border-border hover:bg-accent"
            }`}
          aria-pressed={value === tab}
        >
          {getLabel(tab)}
        </button>
      ))}
    </div>
  );
}
