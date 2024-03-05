import assert = require('power-assert');
import linearScale from '../src/linearScale';

describe('linerScale', () => {
  const to = [0, 100];
  const from = [0, 10];
  const scale = linearScale(from, to);
  it('normal', () => {
    assert(scale(1) === 10);
    assert(scale(0) === 0);
    assert(scale(10) === 100);
  });

  it('normal: out of range', () => {
    assert(scale(-1) === 0);
  });
});
