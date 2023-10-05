export default function compact(arr: any) {
  if (!arr) return [];

  return arr.filter(Boolean);
}
