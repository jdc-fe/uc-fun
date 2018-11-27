const assert = require('power-assert');
const timeformat = require('../../src/timeformat');

describe('timeformat', () => {
  const fmt = 'MM/DD/YYYY HH:mm:ss';
  it('normal', () => {
    const date = new Date('2018-10-10 10:30:20');
    const result = timeformat(date, fmt);
    assert(result === '10/10/2018 10:30:20');
  });

  it('error: if rowDate is empty', () => {
    const result = timeformat('', fmt);
    assert(result === fmt);
  });

  it('error: if date is invalid', () => {
    const result = timeformat('1=2=-3', fmt);
    assert(result === fmt);
  });
});
