import delayPromise from '../../src/delayPromise';

let preVal = 0;

describe('delayPromise', () => {
  it('normal: should run function after delay time', async () => {
    await assert.doesNotReject(
      delayPromise((...args) => {
        [preVal] = [...args];
      }, 3000, 100).then(() => {
        assert(preVal === 100);
      })
    );
  });
});
