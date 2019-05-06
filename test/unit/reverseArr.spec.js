import _ from 'lodash';
import reverseArr from '../../src/reverseArr';

describe.only('reverseArr', () => {
  it('normal', () => {
    assert(reverseArr([]) === []);
    assert(_.isEqual(reverseArr([1, 2, 3]), [3, 2, 1]));
  });

  it('error', () => {
    assert(reverseArr() === []);
    assert(reverseArr(undefined) === []);
    assert(reverseArr(false) === []);
  });
});
