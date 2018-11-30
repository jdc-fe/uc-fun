import stringRealLen from './stringRealLen';
import getType from './getType';
/**
 * 当字符超出一定长度后用省略号代替
 *
 * @param {*} str origin string
 * @param {*} len string length limit
 */
export default (str, len) => {
  if (getType(str) !== 'String') return '';
  if (!isBigger(stringRealLen(str), len)) return str;
  let counter = 0;
  while (counter <= len) {
    counter += 1;
    const curStr = str.substr(0, counter);
    const curLen = stringRealLen(curStr);
    if (curLen > len) return `${curStr.substr(0, counter - 1)}...`;
  }
  return str;
}