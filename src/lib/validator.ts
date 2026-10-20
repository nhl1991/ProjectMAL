
const MAX_OFFSET = 10000;

export function parseOffset(raw: string | null, limit: number): number | null {
    const value = raw ?? '0';
    const n = Number(value);
    if (!/^\d+$/.test(value) || n % limit !== 0 || n > MAX_OFFSET)
        return null;
    return n;
}