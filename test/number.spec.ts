import assert = require('power-assert');
import { fmtNumber, isNumber, percent, toFixed } from '../src';
import { numberToThree } from '../src/number';

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
    assert(isNumber(Infinity) === false);
    assert(isNumber('0') === true);
    // isNumber error 超出范围
    assert(isNumber('31010721001321065006') === false);
  });

  it('toFixed', () => {
    assert(toFixed(1.999, 2) === 2);
    assert(toFixed(1.992, 2) === 1.99);
    assert(toFixed(1.2, 0) === 1);
  });

  it('fmtNumber', () => {
    assert.deepEqual(fmtNumber(10000), { value: 1, symbol: '万' })
    assert.deepEqual(fmtNumber(15000), { value: 1.5, symbol: '万' })
    assert.deepEqual(fmtNumber(1500), { value: 1.5, symbol: '千' })
    assert.deepEqual(fmtNumber(1540, 2), { value: 1.54, symbol: '千' })
  })
  it('fmtNumber with decimal parameter', () => {
    assert.deepEqual(fmtNumber(1540, [], 2), { value: 1540, symbol: '' })
  })
  it('fmtNumber with custom units', () => {
    const units = [
      { value: 1e12, symbol: '万亿' },
      { value: 1e8, symbol: '亿' },
      { value: 1e4, symbol: '万' },
      { value: 1, symbol: '' },
      { value: 1e-2, symbol: '%' },   // 百分
      { value: 1e-3, symbol: '‰' },   // 千分
      { value: 1e-4, symbol: '‱' },    // 万分
    ];
    assert.deepEqual(fmtNumber(10000, units), { value: 1, symbol: '万' })
    assert.deepEqual(fmtNumber(123, units), { value: 123, symbol: '' })
    assert.deepEqual(fmtNumber(0.00012, units), { value: 1.2, symbol: '‱' })
    assert.deepEqual(fmtNumber(0.0000012, units), { value: 0.0000012, symbol: '' })
  })

  it('numberToThree', () => {
    assert.equal(numberToThree(1000), '1,000');
    assert.equal(numberToThree(0.00001), '0.00,001');
  })
});
