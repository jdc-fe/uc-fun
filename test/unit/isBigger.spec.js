import isBigger from '../../src/isBigger';

describe('isBigger', () => {
  it('normal', () => {
    const exa1 = isBigger(10, 3);
    assert(exa1);
  });

  it('error: param is not Number type', () => {
    const result = () => {
      isBigger('10', '2');
    };
    assert.throws(result, Error);
  });
});
