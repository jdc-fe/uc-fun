import delayPromise from '../../src/delayPromise';

let preVal = 0;

describe('delayPromise', () => {
  beforeEach(() => {
    delayPromise((...args) => {
      [preVal] = [...args];
    }, 3000, 100);
  });
  it('normal: should run function after delay time', () => {
    assert(preVal === 100);
  });
});
