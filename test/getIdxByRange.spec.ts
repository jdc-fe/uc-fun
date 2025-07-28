import assert = require('power-assert');
import { getIdxByRange } from '../src/getIdxByRange';

describe.only('getIdxByRange', () => {
  it('normal', () => {
    const range = [100, 80, 60];
    assert.equal(getIdxByRange(range, 90), 1);
    assert.equal(getIdxByRange(range, 110), 0);
    assert.equal(getIdxByRange(range, 60), -1);
    assert.equal(getIdxByRange(range, 100), 1);
  })
})