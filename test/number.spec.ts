import assert = require('power-assert');
import { fmtNumber, isNumber, percent, toFixed } from '../src';

describe('number', () => {
  it('percent', () => {
    assert(percent(1, 1) === '100%');
    assert(percent(1, 2) === '50%');
    assert(percent(1, 3) === '33.33%');
  });

  it('isNumber', () => {
    assert(isNumber('') === false);
    assert(isNumber(null) === false);
    assert(isNumber(undefined) === false);
    assert(isNumber(0) === true);
    assert(isNumber(Infinity) === true);
  });

  it('toFixed', () => {
    assert(toFixed(1.999, 2) === 2);
    assert(toFixed(1.992, 2) === 1.99);
    assert(toFixed(1.2, 0) === 1);
  });

  it('fmtNumber', () => {
    assert(fmtNumber(10000) === '1万')
    assert(fmtNumber(15000) === '1.5万')
  })
});
