import nonEmptyArr from '../../src/nonEmptyArr';

describe.only('nonEmptyArr', () => {
  it('normal', () => {
    assert(nonEmptyArr([1]) === true);
    assert(nonEmptyArr([]) === false);
    assert(nonEmptyArr() === false);
    assert(nonEmptyArr('haha') === false);
    assert(nonEmptyArr(null) === false);
  });
});
