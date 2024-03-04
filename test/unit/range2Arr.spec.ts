import range2Arr from '../../src/range2Arr';

describe('range2Arr', () => {
  it('range2Arr', () => {
    assert.deepEqual(range2Arr(null), []);
    assert.deepEqual(range2Arr(undefined), []);
    assert.deepEqual(range2Arr({}), []);
    assert.deepEqual(range2Arr([]), []);
    assert.deepEqual(range2Arr([1]), [1, 1]);
    assert.deepEqual(range2Arr([1, 2, 3]), [
      [1, 2],
      [2, 3]
    ]);
    assert.deepEqual(range2Arr([1, null, 3]), [
      [1, null],
      [null, 3]
    ]);
  });

  it('param is empty', () => {
    assert.deepEqual(range2Arr(), []);
    assert.deepEqual(range2Arr(null), []);
  });
});
