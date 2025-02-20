/**
 * 生成一个数组
 * @template T 数组元素类型
 * @param {number} len 数组长度
 * @param {function} cb (idx: number) => T 回调函数
 * @returns {Array<T>} 返回的数组
 *
 * @example
 *  genList(3, (idx) => idx * 2)
 *  return [0, 2, 4]
 */
export default function genList<T>(len: number, cb: (idx: number) => T): Array<T> {
  if (len <= 0) return [];

  return new Array(len).fill(null).map((i, idx) => {
    return cb(idx);
  })
};