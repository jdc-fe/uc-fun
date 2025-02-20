import assert = require('power-assert');
import groupArray from '../src/groupArray';

describe('groupArray', () => {
  it('normal', () => {
    assert.deepEqual(
      groupArray([1,2,3,4], 2),
      [[1,2], [3,4]]
    );
    assert.deepEqual(
      groupArray([1,2,3,4], 3),
      [[1,2, 3], [4]]
    );
    assert.deepEqual(
      groupArray([1,2,3,4], 0),
      []
    );
  })
})