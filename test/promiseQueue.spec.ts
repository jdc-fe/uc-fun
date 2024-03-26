import assert = require('power-assert');
import promiseQueue from '../src/promiseQueue';
import { sleep } from '../src';
import Sinon = require('sinon');

describe('promiseQueue', () => {
  it('normal', async () => {
    const clock = Sinon.useFakeTimers({
      // 自动提前假时间， 导致 setTimeout 提前触发， 而不需要 tick 时钟
      shouldAdvanceTime: true
    });
    console.log('start', Date.now());
    await promiseQueue([1,2,3].map((i) => {
      return async () => {
        await sleep(100);
        console.log('run promise', i, Date.now());
        assert(Date.now() >= 100 * i)
      }
    }));
    // await clock.tick(500);
    // // await clock.tick(100);
    // // await clock.tick(100);
    // // await clock.tick(100);
    clock.restore();
  });
})