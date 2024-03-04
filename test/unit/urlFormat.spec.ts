import urlFormat from '../../src/urlFormat';

describe('timeformat', () => {
  it('normal', () => {
    const exa = 'https://www.jd.com?key1=a++b&key2=%E4%B8%AD%E6%96%87&key3=中文&key4==&%-$?#';
    const result = urlFormat(exa);
    assert.deepEqual(result, {
      key1: 'a  b',
      key2: '中文',
      key3: '中文',
      key4: '=',
      '%-$?#': ''
    });
  });

  it('normal: search part is none', () => {
    const exa = 'https://www.jd.com';
    const exaOnly = 'https://www.jd.com?';
    const result = urlFormat(exa);
    const resultOnly = urlFormat(exaOnly);
    assert.deepEqual(result, {});
    assert.deepEqual(resultOnly, {});
  });

  it('normal: query part, no "="', () => {
    const exa = 'https://www.jd.com?justkey';
    const result = urlFormat(exa);
    assert.deepEqual(result, { justkey: '' });
  });

  it('error: param is empty', () => {
    const result = urlFormat();
    assert.deepStrictEqual(result, {});
  });

  it('error: param is not string type', () => {
    const result = () => {
      urlFormat(() => { });
    };
    assert.throws(result, Error);
  });
});
