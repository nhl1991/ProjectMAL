import { Search, X } from "lucide-react"

export default function SearchForm({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex items-center gap-2 bg-muted border border-border rounded-lg px-3 h-10 w-full max-w-md">
      <Search className="w-4 h-4 text-muted-foreground shrink-0" />
      <input
        className="flex-1 bg-transparent outline-none text-sm"
        placeholder="애니메이션 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        name="query"
      />
      {value && (
        <button onClick={() => onChange("")} aria-label="검색어 지우기">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      )}
    </div>
  )
}
