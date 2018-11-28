import urlFormat from '../../src/urlFormat';

describe('urlFormat', () => {
  it('normal', () => {
    const urlExa = 'homePage?name=lili&age=10';
    const result = urlFormat(urlExa);
    assert.deepStrictEqual(result, { name: 'lili', age: '10' });
  });

  it('error: if url is empty', () => {
    const result = urlFormat();
    assert.deepStrictEqual(result, {});
  });
});
