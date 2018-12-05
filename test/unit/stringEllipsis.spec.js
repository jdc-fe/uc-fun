import stringEllipsis from '../../src/stringEllipsis';

describe('stringEllipsis', () => {
  it('normal', () => {
    const exa1 = stringEllipsis('aaabbbccc', 3);
    const exa2 = stringEllipsis('aa', 3);
    assert(exa1 === 'aaa...');
    assert(exa2 === 'aa');
  });

  it('error: param is not string type', () => {
    const exa1 = () => {
      stringEllipsis(123, 2);
    };
    const exa2 = () => {
      stringEllipsis('aaabbbccc', '3');
    };
    const exa3 = () => {
      stringEllipsis('aaa', '10');
    };
    assert.throws(exa1, Error);
    assert.throws(exa2, Error);
    assert.throws(exa3, Error);
  });
});
