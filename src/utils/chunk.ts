import { toInteger } from './toInteger';

export function chunk(items: any[], size: any = 1) {
  let current = 0;
  let acc: any[] = [];
  const result: any[] = [];

  // if pass size as a falsy value (except undefined) => treat as 0
  // if pass size < 0 return 0
  size = Math.max(toInteger(size), 0);

  items.forEach((item) => {
    if (current >= size) {
      result.push(acc);
      current = 1;
      acc = [item];
    } else {
      acc.push(item);
      ++current;
    }
  });

  if (acc.length) {
    result.push(acc);
  }

  return result;
}
