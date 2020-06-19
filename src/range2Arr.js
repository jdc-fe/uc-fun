/**
 * 将一维数组前后元素转换成二维数组, [1,2,3] => [[1,2], [2,3]]
 * @param {Number[]} range
 */
export default (range = []) => {
  // 边界处理
  if (!range) return [];
  if (!Array.isArray(range)) return [];
  const { length } = range;

  if (length === 1) return Array(2).fill(range[0]);
  return range.slice(0, -1).map((item, index) => [item, range[index + 1]]);
};
