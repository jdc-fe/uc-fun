import isJsonString from '../../src/isJsonString';

describe('isJsonString', () => {
  it('normal: input json string should return true', () => {
    assert(isJsonString('""') === true);
    assert(isJsonString('{}') === true);
    assert(isJsonString('true') === true);
  });

  it('error: invalid json string should return false', () => {
    assert(isJsonString('undefined') === false);
  });
});
