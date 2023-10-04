import { toFinite } from './toFinite';

/**
 * Converts `value` to an integer
 * @param {*} value The value to convert
 * @returns {number} Returns the converted integer
 * @example
 * toInteger(3.2)
 * // => 3
 *
 * toInteger(Number.MIN_VALUE)
 * // => 0
 *
 * toInteger(Infinity)
 * // => 1.7976931348623157e+308
 *
 * toInteger('3.2')
 * // => 3
 */
export function toInteger(value: any): number {
  const result = toFinite(value);
  const remainder = result % 1;

  return remainder ? result - remainder : result;
}
