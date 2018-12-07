import getType from './getType';
/**
 *  比较第一个参数是否大于第二个参数
 * @param {Number} num 需要比较的数 eg:2
 * @param {Number} standard 被对比的数 eg:10
 * @return {Boolean}
 *
 * @example
 *  isBigger(10,2)
 *  => true
 */
export default (num, standard) => {
  if (getType(num) !== 'Number' || getType(standard) !== 'Number') {
    throw new Error('the params of isBigger must be Number type');
  }
  return num > standard;
};
