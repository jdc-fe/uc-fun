/**
 * 线性比例尺
 *    根据当前数据范围和目标数据范围，对数据 x 做线性映射，若 x 超出当前数据范围， 则取边界值
 * @param {array} from [min, max]   当前数据范围
 * @param {array} to [min, max]  目标数据范围
 * @param {number} num  当前数据
 * @return {function} 返回此工具函数
 * */
// to, from
export default function linearScale(from, to) {
  const [min, max] = from;
  const times = (to[1] - to[0]) / (max - min);
  return (num) => {
    if (num <= min) return to[0];
    if (num >= max) return to[1];
    return to[0] + (Math.min(max, num) - min) * times;
  };
}
