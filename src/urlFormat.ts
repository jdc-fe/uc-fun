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
export default (url: String) => {
  if (!url) return {};
  if (getType(url) !== 'String') {
    throw new Error('the param of urlFormat must be string');
  }
  const pos = url.indexOf('?');
  if (pos === -1) return {};
  const urlSearch = url.substr(pos + 1);
  const urlObj = new URLSearchParams(urlSearch);
  return urlObj;
};
