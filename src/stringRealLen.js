import getType from './getType';
/**
 * 计算字符串的真实长度， 英文 1 个字节， 中文两个字节
 * @param {String} str 需要被计算的字符串
 * @return {Number} 字符串长度
 *
 * @example
 *  stringRealLen('abc')
 *  => 3
 *
 *  stringRealLen('中')
 *  => 2
 *
 *  stringRealLen(() => {})
 *  => 0
 */
export default (str) => {
  if (getType(str) !== 'String') return 0;
  return str.replace(/[\u4e00-\u9fa5]/g, 'ss').length;
};
