import assert = require('power-assert');
// import { isEqual } from 'lodash';
import reverseArr from '../src/reverseArr';

describe('reverseArr', () => {
  it('normal', () => {
    assert.deepEqual(reverseArr([]), []);
    assert.deepEqual(reverseArr([1, 2, 3]), [3, 2, 1]);
  });

  it('normal: with interator handler', () => {
    const origin = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const reverse = reverseArr(origin, ({ x }, idx) => x * idx);
    assert.deepEqual(reverse, [6, 2, 0]);
  });
});
