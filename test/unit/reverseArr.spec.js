import { isEqual } from 'lodash';
import reverseArr from '../../src/reverseArr';

describe('reverseArr', () => {
  it('normal', () => {
    assert(isEqual(reverseArr([]), []));
    assert(isEqual(reverseArr([1, 2, 3]), [3, 2, 1]));
  });

  it('normal: with interator handler', () => {
    const origin = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const reverse = reverseArr(origin, ({ x }, idx) => x * idx);
    assert(isEqual(reverse, [6, 2, 0]));
  });

  it('error', () => {
    assert(isEqual(reverseArr(), []));
    assert(isEqual(reverseArr(undefined), []));
    assert(isEqual(reverseArr(false), []));
  });
});
