import compact from '../utils/compact';
import { falsey } from './utils';

describe('compact', () => {
  it('shoud remove all falsy values', () => {
    const nonFalsyValues = ['0', [], {}, 1];

    expect(compact(nonFalsyValues.concat(falsey))).toEqual(nonFalsyValues);
  });

  it('should return empty array when `arr` is falsy', () => {
    expect(falsey.map((val) => compact(val))).toEqual(falsey.map(() => []));
  });
});
