export function getCurrentPage(p?: string | string[]): number {
  const page = Array.isArray(p) ? p[0] : p;
  const parsed = Number(page);
  return !isNaN(parsed) && parsed > 0 ? parsed : 1;
}
