/**
 * 不改变原始数组，倒序输出array
 * @param {array} arr 待遍历的数组
 * @param {function} handler (item, idx) => { // todo }
 * @return {array} reversed array default return []
 *
 * @usage
 *  reverseArr([1, 2, 3])
 *    => [3, 2, 1]
 *
 *  const origin = [{ x: 1 }, { x: 2 }, { x: 3 }];
 *  reverseArr(origin, ({ x }, idx) => x * idx)
 *    => [6, 2, 0]
 * */
import getType from './getType';
import nonEmptyArr from './nonEmptyArr';

export default (arr, handler) => {
  if (!nonEmptyArr(arr)) return [];
  const len = arr.length - 1;
  const result = [];
  // have handler
  if (getType(handler) === 'Function') {
    for (let i = len; i >= 0; i--) {
      result.push(handler(arr[i], i));
    }
  } else {
    // no handler, just reverse it
    for (let i = len; i >= 0; i--) {
      result.push(arr[i]);
    }
  }

  return result;
};
