/**
 * jsonp 接口请求
 *
 * @param {string} url
 * @param {object} params
 * @returns any
 *
 * @example
 *   jsonp('/users', { page: 1, pageSize: 20 })
 *   jsonp('/users?token=token', { page: 1, pageSize: 20 })
 */
import randomStr from "./randomStr";

declare global {
  interface Window {
    [key: string]: any; // 允许任意字符串索引，值为函数
  }
}

export function buildUrl(url: string, params: Record<string, any> = {}): string {
  const query = new URLSearchParams(params);
  return `${url}${url.includes('?') ? '&' : '?'}${query.toString()}`;
}

export default async function jsonp(url: string, params: object = {}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const callbackName = `cb${randomStr(6)}`;

    const timeoutId = setTimeout(() => {
      reject(new Error('JSONP request timed out'));
      document.body.removeChild(script);
      delete window[callbackName];
    }, 60000);
    const clear = () => {
      clearTimeout(timeoutId);
      document.body.removeChild(script);
      delete window[callbackName];
    }

    window[callbackName] = (data: any) => {
      resolve(data);
      clear();
    };

    script.src = buildUrl(url, { callback: callbackName, ...params });
    // 5. 错误处理
    script.onerror = (e) => {
      reject(e);
      clear();
    };
    document.body.appendChild(script);
  });
}
