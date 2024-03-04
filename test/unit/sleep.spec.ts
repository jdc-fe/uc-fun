import sleep from '../../src/sleep';

describe('sleep', () => {
  it('normal: should run function after delay time', (done) => {
    const clock = sinon.useFakeTimers();
    sleep(100).then(() => {
      assert.strictEqual(new Date().getTime(), 100);
      clock.restore();
      done();
    });
    clock.tick(100);
  });
});
