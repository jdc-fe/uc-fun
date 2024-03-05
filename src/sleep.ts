/**
 * await duration time
 * @param duration  millisecond
 * @return Promise 实例
 *
 * @example
 * sleep(100)
 * => Promise {<pending>}
 */
export default (duration: number) => new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  }, duration);
});
