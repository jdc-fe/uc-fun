import { isFunction } from './baseDataType';
/**
 * 延迟执行函数， 返回promise
 *
 * @param {function} func 待执行函数
 * @param {int} duration  延迟时间， 毫秒
 * @param {any} args      待执行函数参数
 */
export default (func, duration, ...args) => {
  if (!isFunction(func)) throw new Error('first param must be function');
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        resolve(await func(...args));
      } catch (e) {
        reject(e);
      }
    }, duration);
  });
};
