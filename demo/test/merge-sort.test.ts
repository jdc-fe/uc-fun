import assert = require('power-assert');
import { mergeSort, mergeSort2 } from '../src/merge-sort';

describe('merge sort', () => {
  describe('mergeSort', () => {
    it('normal', () => {
      assert.deepEqual(mergeSort([1,2,3,4,5,6]), [1,2,3,4,5,6]);
      assert.deepEqual(mergeSort([6,5,4,3,2,1]), [1,2,3,4,5,6]);
      assert.deepEqual(mergeSort([1,4,3,6,2,5]), [1,2,3,4,5,6]);
    });
  });
  describe('mergeSort2', () => {
    it('normal', () => {
      assert.deepEqual(mergeSort2([]), []);
      assert.deepEqual(mergeSort2([1]), [1]);
      assert.deepEqual(mergeSort2([1,2,3,4,5,6]), [1,2,3,4,5,6]);
      assert.deepEqual(mergeSort2([6,5,4,3,2,1]), [1,2,3,4,5,6]);
      assert.deepEqual(mergeSort2([1,4,3,6,2,5]), [1,2,3,4,5,6]);
    });
  });
});