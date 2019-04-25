/**
 * 检测是否是json字符串
 * @param {string} str
 * @return {boolean}
 */

export default str => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
