import assert = require('power-assert');
import randomStr from '../src/randomStr';

describe('randomStr', () => {
  it('normal', () => {
    const str1 = randomStr(1)
    assert.ok(str1.length === 1);

    assert(randomStr(0).length === 11);
    const str2 = randomStr(20)
    console.log(str2, str2.length, 'length = 11');
    assert(str2.length === 11);

    const prefix = 'pre';
    assert.ok(randomStr(2, prefix).length === prefix.length + 3);
  });
});
