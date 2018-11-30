/**
 * 睡眠指定时间 返回promise实例
 * @param {int} duration  睡眠时间, 毫秒
 * @return {Promise Instance} Promise 实例
 *
 * @example
 * sleep(100)
 * => Promise {<pending>}
 *
 */
export default (duration) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, duration);
});
