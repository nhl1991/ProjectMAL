import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTitle(node: { title: string; alternative_titles?: { ja?: string } }) {
  return node.alternative_titles?.ja ?? node.title
}

const STATUS_LABELS: Record<string, string> = {
  finished_airing: "Finished Airing",
  currently_airing: "Currently Airing",
  not_yet_aired: "Not Yet Aired",
}

export function formatStatus(status: string) {
  return STATUS_LABELS[status] ?? status
}

const RATING_LABELS: Record<string, string> = {
  g: "G",
  pg: "PG",
  pg_13: "PG-13",
  r: "R",
  "r+": "R+",
  rx: "Rx",
}

export function formatRating(rating: string) {
  return RATING_LABELS[rating] ?? rating
}
