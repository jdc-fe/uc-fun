import sleep from '../../src/sleep';

describe('sleep', () => {
  let clock;
  let val = 0;
  before(() => { clock = sinon.useFakeTimers(); });
  after(() => { clock.restore(); });

  it('normal: should run function after delay time', () => {
    const changeVal = async () => {
      await sleep(100);
      val = 1;
    };
    changeVal();
    clock.tick(99);
    assert(val === 0);
    clock.tick(1);
    assert(val === 1);
  });
});
