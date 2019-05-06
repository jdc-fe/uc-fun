/**
 * 倒序输出array
 * @param {array} arr 待遍历的数组
 * @param {function} handler (item, idx) => { // todo }
 * @return {array} reversed array
 * */
import nonEmptyArr from './nonEmptyArr';

export default (arr, handler) => {
  if (!nonEmptyArr(arr)) return [];
  const len = arr.length - 1;
  const result = [];
  for (let i = len; i >= 0; i--) {
    result.push(handler(arr[i], i));
  }
  return result;
};
