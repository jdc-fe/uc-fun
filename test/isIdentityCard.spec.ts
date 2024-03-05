import assert = require('power-assert');
import isIdentityCard from '../src/isIdentityCard';

describe('isIdentityCard', () => {
  it('normal', () => {
    const number: (string|number)[] = [
      '622001790122123',
      610124199810283999,
      '34052419800101001X',
      '34052419800101001x'
    ];
    const result = number.every((item: string|number) => isIdentityCard(item));
    assert(result === true);
  });

  it('error: if length is not 15 or 18', () => {
    const result = isIdentityCard('');
    assert(result === false);
  });

  it('error: if year is leap year and February day more than 29', () => {
    const number = ['610124202002303778', '622001800230123'];
    const result = number.every(item => isIdentityCard(item));
    assert(result === false);
  });

  it('error: if year is not leap year and February day more than 28', () => {
    const number = ['610124201902293778', '622001810229123'];
    const result = number.every(item => isIdentityCard(item));
    assert(result === false);
  });

  // 校验码不正确
  it('error: if checking code is not true', () => {
    const result = isIdentityCard('340524198001010019');
    assert(result === false);
  });

  it('error: if number is invalid', () => {
    const result = isIdentityCard('1=3+34');
    assert(result === false);
  });
});
