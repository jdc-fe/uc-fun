import stringRealLen from '../../src/stringRealLen';

describe('stringRealLen', () => {
  it('normal', () => {
    const exa = stringRealLen('a中文');
    assert(exa === 5);
  });

  it('error: param is empty', () => {
    const exa = stringRealLen();
    assert(exa === 0);
  });
  it('error: param is not string type', () => {
    const exa = stringRealLen(new Date());
    assert(exa === 0);
  });
});
