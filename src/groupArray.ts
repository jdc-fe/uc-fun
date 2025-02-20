/**
 * 将数组 arr 按 num 数量分组
 * @template T 数组元素类型
 * @param {Array<T>} arr 待分组的数组
 * @param {number} num 每个分组的数量
 * @returns {Array<Array<T>>} 分组后的数组
 *
 * @example
 *  groupArray([1,2,3,4], 2)
 *  return [[1,2], [3,4]]
 */
export default function groupArray<T>(arr: Array<T>, num: number): Array<Array<T>> {
  if (num <= 0) {
      return []; // 或者抛出错误，根据你的需求来定
  }

  const result: Array<Array<T>> = [];
  for (let i = 0; i < arr.length; i += num) {
      result.push(arr.slice(i, i + num));
  }
  return result;
}