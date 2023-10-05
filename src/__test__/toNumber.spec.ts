import { toNumber } from '../utils';

describe('toNumber', () => {
  const testNumbers = [1.1, 2, 0, -2, 6.5555555555];
  const testStrings = [
    { value: '3.2', expectation: 3.2 },
    { value: '3.222222222222222', expectation: 3.222222222222222 },
    { value: '0000', expectation: 0 },
    { value: '11dcdscds', expectation: NaN },
    { value: 'djsndjsn1111', expectation: NaN },
    { value: 'kjvdfjnvdfj', expectation: NaN }
  ];

  const testOthers = [
    { value: null, expectation: 0 },
    { value: undefined, expectation: NaN },
    { value: Symbol(12), expectation: NaN },
    { value: { foo: 'bar' }, expectation: NaN },
    { value: new Number('123'), expectation: 123 },
    { value: new String('ascdscdscds'), expectation: NaN },
    { value: '      djcbndjc       ', expectation: NaN },
    { value: '      123       ', expectation: 123 }
  ];

  it.each(testNumbers)('test with numeric values', (val) => {
    expect(toNumber(val)).toBe(val);
  });

  it.each(testStrings)('test with string values', ({ expectation, value }) => {
    expect(toNumber(value)).toBe(expectation);
  });

  it.each(testOthers)('test with other special values', ({ expectation, value }) => {
    expect(toNumber(value)).toBe(expectation);
  });
});
