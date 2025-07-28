/**
 * 获取数据分界线 idx
 * @param {number[]} list 分界线
 * @param {number} num 当前要比较的值
 * @returns {number}
 * @eg
 *    const colors = ['red', 'yellow', 'blue'];
 *    const idx = getIndexByRange([100, 80, 60], 70)
 *    const color = colors[idx] // 蓝色
 *
 *    num > 100 return 0
 *    80 < num <= 100 return 1
 *    60 < num <= 80 return 2
 *    <= 60 return -1
 */
export const getIdxByRange = (list: number[], num: number) => {
  return list.findIndex(divider => divider < num);
}