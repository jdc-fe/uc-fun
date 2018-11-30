import stringEllipsis from '../../src/stringEllipsis';

describe('stringEllipsis', () => {
  it('normal', () => {
    const exa1 = stringEllipsis('aaabbbccc', 3);
    const exa2 = stringEllipsis('aaabbbccc', '3');
    const exa3 = stringEllipsis('aaa', '10');
    assert(exa1 === 'aaa...');
    assert(exa2 === 'aaa...');
    assert(exa3 === 'aaa');
  });

  it('error: param is not string type', () => {
    const exa1 = stringEllipsis(() => { }, 3);
    const exa2 = stringEllipsis(323, 1);
    assert(exa1 === '');
    assert(exa2 === '');
  });
});
