/**
 * json 字符串解析，不会报异常的
 * @param {string} str
 */
export default (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return '';
  }
};
