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
  if (Number(x) > Number.MAX_SAFE_INTEGER || Number(x) < Number.MIN_SAFE_INTEGER) {
    return false;
  }
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

interface Unit {
  value: number
  symbol: string
}

const DEFAULT_UNITS: Unit[] = [
  { value: 1e12, symbol: '万亿' },
  { value: 1e8, symbol: '亿' },
  { value: 1e4, symbol: '万' },
  { value: 1e3, symbol: '千' },
];

/**
 * 格式化数字，将大数字转换为指定单位的表示形式
 * @param {number} value 需要格式化的数字
 * @param {Unit[]} units [{ value, symbol }] 转化单位，默认 千, 万, 亿, 万亿
 *
 * @returns {Unit} 格式化后的字符串或原始数字
 *
 * @example
 *  fmtNumber(15000)
 *  { value: 1.5, symbol: '万' }
 */
export function fmtNumber(value: number, units: Unit[] = DEFAULT_UNITS): Unit {
  for (const item of units) {
      if (value >= item.value) {
          return { value: toFixed(value / item.value, 1), symbol: item.symbol };
      }
  }

  return { value, symbol: '' };
}