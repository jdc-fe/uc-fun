import assert = require('power-assert');
import stringEllipsis from '../src/stringEllipsis';

describe('stringEllipsis', () => {
  it('normal', () => {
    assert(stringEllipsis('aaabbbccc', 3) === 'aaa...');
    assert(stringEllipsis('abc', 3) === 'abc');
    assert.equal(stringEllipsis('你好，世界', 5), '你好，...');
  });
});
