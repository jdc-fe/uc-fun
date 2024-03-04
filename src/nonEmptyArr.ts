/**
 * detects whether an array is an empty array
 * @param {any[]} arr
 * @return {boolean}
 *
 * @example
 *  isEmptyArr([])
 *  => false
 *
 *  isEmptyArr()
 *  => false
 *
 *  isEmptyArr([1])
 *  => true
 */

import getType from './getType';

export default (arr) => (
  getType(arr) === 'Array' && arr.length > 0
);
