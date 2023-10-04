import toNumber from './toNumber';

const MAX_INTEGER = 1.7976931348623157e308;

export default function toFinite(value: any): number {
  if (!value) return value === 0 ? value : 0;

  value = toNumber(value);

  if (value === Infinity || value === -Infinity) {
    const sign = value > 0 ? 1 : -1;
    return sign * MAX_INTEGER;
  }

  return value;
}
