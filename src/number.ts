/**
 * 百分比计算，保留两位小数
 * @param a 分子
 * @param b 分母
 * @returns 返回百分比字符串  x%
 * @example
 * percent(1, 1) = '100%'
 * percent(1, 2) = '50%'
 * percent(1, 3) = '33.33%'
 */
export const percent = (a: number, b: number) => {
  const res = Math.round((a * 10000) / b);
  return `${res / 100}%`;
};

/**
 * 校验一个参数是否是数字
 * @param x
 * @returns boolea
 *
 * @example
 * isNumber('') = false;
 * isNumber(null) = false;
 * isNumber(undefined) = false;
 * isNumber(0) = true;
 * isNumber(Infinity) = true;
 */
export const isNumber = (x: any): boolean => {
  if (x === 0 || x === '0') return true;
  return !!Number(x);
};

/**
 * 计算小数点位数
 * @param num
 * @param decimal 小数点位数
 * @returns number
 * @example
 * toFixed(1.999, 2) = 2
 * toFixed(1.992, 2) = 1.99
 * toFixed(1.2, 0) = 1
 */
export const toFixed = (num: number, decimal = 2) => {
  if (!isNumber(num)) return num;
  if (decimal) {
    const times = Math.pow(10, decimal);
    const val = Math.round(times * num);
    return val / times;
  }
  return Math.round(num);
}

/**
 * 随机一个数字
 * @param times 倍数， 默认是 1
 * @param decimal 保留几位小数， 默认是整数
 * */
export const randomNum = (times = 1, decimal = 0) => toFixed(Math.random() * times, decimal);


/***
 * 科学技术， xx 万
 * @example
 * fmtNumber(10000) = '1万'
 * fmtNumber(15000) = '1.5万'
*/
export function fmtNumber(num: number) {
  if (num >= 10000) return `${toFixed(num / 10000, 2)}万`;
  if (num >= 1000) return `${Math.round(num / 100) / 10}千`;
  return num;
  // if (num > 10000) return `${Math.round(num / 10000)}万`;
}
