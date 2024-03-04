import stringRealLen from './stringRealLen';
import getType from './getType';
import isBigger from './isBigger';
/**
 * 当字符超出一定长度后用省略号代替
 * @param {String} str 需要处理的字符串
 * @param {Number} len 字符串长度限制
 * @return {String} 处理后的字符串
 *
 * @example
 *  stringEllipsis('aaabbb',3)
 *  => 'aaa...'
 *
 *  stringEllipsis(()=>{},3)
 *  => ''
 */
export default (str, len) => {
  if (getType(str) !== 'String') return '';
  if (!isBigger(stringRealLen(str), len)) return str;
  let counter = 0;
  // to be promote
  while (counter <= len) {
    counter += 1;
    const curStr = str.substr(0, counter);
    const curLen = stringRealLen(curStr);
    if (curLen > len) return `${curStr.substr(0, counter - 1)}...`;
  }
};
