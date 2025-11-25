/**
 * 通用重试函数 - 适用于任意可能抛出异常的函数
 * @param fn - 需要重试的函数
 * @param options - 配置选项
 * @param options.retries - 最大重试次数(默认3次)
 * @param options.delay - 基础延迟时间(默认1000ms)
 * @param options.exponential - 是否使用指数退避(默认false)，每次重试后延迟时间增加一倍
 * @param options.onRetry - 重试时的回调函数，参数包含当前尝试次数、错误信息、等待时间和剩余重试次数
 * @returns 函数执行结果
 */
interface RetryOptions {
  /** 最大重试次数(默认3次) */
  retries?: number;
  /** 基础延迟时间(默认1000ms) */
  delay?: number;
  /** 是否使用指数退避(默认false)，每次重试后延迟时间增加一倍 */
  exponential?: boolean;
  /** 重试时的回调函数 */
  onRetry?: (params: {
    /** 当前尝试次数 */
    attempt: number;
    /** 错误信息 */
    error: Error;
    /** 等待时间(ms) */
    waitTime: number;
    /** 剩余重试次数 */
    remaining: number;
  }) => void;
}

export default async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const {
    retries = 3,
    delay = 1000,
    exponential = false,
    onRetry = null
  } = options;

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt > retries) {
        throw error;
      }
      const waitTime = exponential ? delay * Math.pow(2, attempt - 1) : delay;
      console.log('retry', attempt, 'times', waitTime, Date.now());
      if (onRetry) {
        try {
          onRetry({ attempt, error, waitTime, remaining: retries - attempt + 1 });
        } catch(e) {
          console.error('retry 中 onRetry 回调函数执行失败', e);
        }
      }

      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
}

// 使用示例：
// await retry(() => fetch('/api/data').then(r => r.json()));
// await retry(() => axios.get('/api/users'));
// await retry(() => someAsyncFunction());