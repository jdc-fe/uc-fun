import assert = require('power-assert');
import randomStr from '../src/randomStr';

describe('randomStr', () => {
  it('normal', () => {
    const str1 = randomStr(1)
    assert.ok(str1.length === 1);

    assert.ok(randomStr(0).length === 11);
    assert.ok(randomStr(20).length === 11);

    const prefix = 'pre';
    assert.ok(randomStr(2, prefix).length === prefix.length + 3);
  });
});
