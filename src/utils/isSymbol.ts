import { getTag } from '../internal';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 */
export function isSymbol(value: any): boolean {
  const type = typeof value;
  return type === 'symbol' || (type === 'object' && value != null && getTag(value) === '[object Symbol]');
}
