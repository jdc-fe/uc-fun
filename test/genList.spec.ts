import assert = require('power-assert');
import genList from '../src/genList';

describe('genList', () => {
  it('normal', () => {
    assert.deepEqual(
      genList(2, (idx) => idx),
      [0, 1]
    );
    assert.deepEqual(
      genList(0, (idx) => idx),
      []
    );
    assert.deepEqual(
      genList(-1, (idx) => idx),
      []
    );
  })
})