import assert = require('power-assert');
import promiseQueue from '../src/promiseQueue';
import { sleep } from '../src';

describe('promiseQueue', () => {
  it('normal', async () => {
    console.log('start', new Date().toISOString());
    await promiseQueue([1,2,3].map((i) => {
      return async () => {
        console.log('print', i, new Date().toISOString());
        await sleep(100);
      }
    }));
  });
})