import getType from './getType';

/**
 * @param {String} url [url string with '?']
 *  eg 'https://www.jd.com?paramKey=paramValue' | '?paramKey=paramValue'
 * @return {Object} object
 *
 * @example
 *  urlFormat(https://www.jd.com?key=value)
 *  => { key: 'value' }
 *
 *  urlFormat()
 *  => {}
 *
 *  urlFormat({})
 *  => Uncaught Error: the param of urlFormat must be string
 */
export type URLFormatResult = {
  [key: string]: string
}
export default function urlFormat(url: string): URLFormatResult {
  if (getType(url) !== 'String') {
    throw new Error('the param of urlFormat must be string');
  }
  const pos = url.indexOf('?');
  if (pos === -1) return {};
  const urlSearch = url.substring(pos + 1);
  const qs = new URLSearchParams(urlSearch);
  const obj: URLFormatResult = {};
  for (const [key, value] of qs.entries()) {
    obj[key] = value;
  }
  return obj;
};
