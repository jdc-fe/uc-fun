/**
 * 延迟执行函数， 返回promise
 *
 * @param {function} func 待执行函数
 * @param {int} duration  延迟时间， 毫秒
 * @param {any} args      待执行函数参数
 */
export default (duration) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, duration);
});
