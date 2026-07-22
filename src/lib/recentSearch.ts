const STORAGE_KEY = "recentSearch";
const MAX_ENTRIES = 5;

export function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
  } catch {
    return [];
  }
}

export function saveRecentSearch(query: string): string[] {
  const prev = getRecentSearches();
  const next = [query, ...prev.filter((q) => q !== query)].slice(0, MAX_ENTRIES);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export function removeRecentSearch(query: string): string[] {
  const next = getRecentSearches().filter((q) => q !== query);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}
