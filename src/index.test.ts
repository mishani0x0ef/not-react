import { add } from '.';

describe('test', () => {
  it('WHEN adding two values SHOULD return sum', () => {
    const expected: number = 4;

    const actual = add(2, 2);

    expect(actual).toEqual(expected);
  });
});
