import jsonParse from '../../src/jsonParse';

describe('jsonParse', () => {
  it('normal', () => {
    assert(jsonParse('""') === '');
    assert(jsonParse('true') === true);

    const point = jsonParse('{"x":1,"y":2}');
    assert(point.x === 1);
    assert(point.y === 2);
  });

  it('error: invalid json string should return false', () => {
    assert(jsonParse('undefined') === '');
  });
});
