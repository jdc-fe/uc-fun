import sleep from '../../src/sleep';

describe('sleep', () => {
  let clock;
  before(() => { clock = sinon.useFakeTimers(); });
  after(() => { clock.restore(); });

  it('normal: should run function after delay time', () => {
    const callFunc = async (func) => {
      await sleep(100);
      func();
    };
    const callback = sinon.fake();
    callFunc(callback);

    clock.tick(99);
    assert(callback.notCalled);

    clock.tick(1);
    assert.strictEqual(new Date().getTime(), 100);
    assert(callback.calledOnce);
  });
});
