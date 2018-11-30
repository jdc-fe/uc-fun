import isBigger from '../../src/isBigger';

describe('isBigger', () => {
  it('normal', () => {
    const exa1 = isBigger(10, 3);
    assert(exa1);
  });

  it('normal: param can be converted into a number', () => {
    const exa1 = isBigger('  10  ', '3');
    const exa2 = isBigger('  10  ', new Date());
    const exa3 = isBigger(null, 10);
    assert(exa1);
    assert(!exa2);
    assert(!exa3);
  });

  it('error: param canot be converted into a number', () => {
    const exa1 = () => {
      isBigger(() => { }, 3);
    };
    const exa2 = () => {
      isBigger(3, undefined);
    };
    assert.throws(exa1, Error);
    assert.throws(exa2, Error);
  });
});
