/**
 *  比较第一个参数是否大于第二个参数 （参数建议数字类型，也可以处理能转为数字类型的参数,例如string '10', null, new Date()）
 * @param {Number} num 需要比较的数 eg:2
 * @param {Number} standard 被对比的数 eg:10
 * @return {Boolean}
 *
 * @example
 *  isBigger(10,2)
 *  => true
 *
 *  isBigger(1,new Date())
 *  => false
 *
 *  isBigger('12','2')
 *  => true
 */
export default (num, standard) => {
  if (
    num === null
    || standard === null
    || Number.isNaN(Number(num))
    || Number.isNaN(Number(standard))
  ) {
    return false;
  }
  return Number(num) > Number(standard);
};
