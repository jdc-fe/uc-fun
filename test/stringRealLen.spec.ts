import assert = require('power-assert');
import stringRealLen from '../src/stringRealLen';

describe('stringRealLen', () => {
  it('normal', () => {
    assert(stringRealLen('a中文') === 5);
    assert(stringRealLen('hello') === 5);
  });
});
