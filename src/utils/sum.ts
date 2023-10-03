export function sum(...args: number[]) {
  return args.reduce((carry, current) => carry + current, 0);
}
