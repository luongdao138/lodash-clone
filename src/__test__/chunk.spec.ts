import { chunk } from '..';
import { falsey } from './utils';

describe('chunk', () => {
  const array = [1, 2, 3, 4, 5, 6];

  it('it should split array correctly', () => {
    const expectedArray = [[1], [2], [3], [4], [5], [6]];
    const actualArray = chunk(array);

    expect(actualArray).toEqual(expectedArray);
  });

  it('it shoud return the last chunk as remaining elements', () => {
    const actual = chunk(array, 4);

    expect(actual).toEqual([
      [1, 2, 3, 4],
      [5, 6]
    ]);
  });

  it("it shoud return whole array if size >= array's length", () => {
    expect(chunk(array, 6)).toEqual([[1, 2, 3, 4, 5, 6]]);
    expect(chunk(array, 8)).toEqual([[1, 2, 3, 4, 5, 6]]);
  });

  it('it should treat false `size` values, except `undefined`, as `0`', () => {
    const actual = falsey.map((value, index) => (index ? chunk(array, value) : chunk(array)));
    const expected = falsey.map((value) => (value === undefined ? [[1], [2], [3], [4], [5], [6]] : []));

    expect(actual).toEqual(expected);
  });

  it('should ensure mininum `size` is 0', () => {
    expect(chunk(array, -4)).toEqual([]);
  });

  it('should coerce `size` to an integer', () => {
    expect(chunk(array, array.length / 4)).toEqual([[1], [2], [3], [4], [5], [6]]);
  });
});
